{
  inputs,
  cell,
}: let
  inherit (inputs) self std nixpkgs;
  lib = nixpkgs.lib // builtins;
  package = lib.importJSON "${self}/package.json";
in
  nixpkgs.mkYarnPackage
  rec {
    pname = "wcms-landing";
    version = self.dirtyRev or self.rev;

    src = std.incl self [
      "assets"
      "components"
      "composables"
      "content"
      "layouts"
      "locales"
      "mixins"
      "pages"
      "plugins"
      "public"
      "server"
      "app.vue"
      "app.config.ts"
      "content.config.ts"
      "nuxt.config.ts"
      "package.json"
      "tailwind.config.js"
      "tsconfig.json"
      "yarn.lock"
    ];

    nodejs = nixpkgs.nodejs_22;
    nativeBuildInputs = [
      nixpkgs.makeBinaryWrapper
      nixpkgs.python3
      nixpkgs.pkg-config
    ];
    buildInputs = [
      nixpkgs.sqlite
    ];

    buildPhase = let
      cwd = "deps/${package.name}";
    in ''
      export HOME=$(mktemp -d)           # temporary home directory
      export NODE_ENV=production         # production environment
      export CI=1                        # CI environment
      export NUXT_TELEMETRY_DISABLED=1   # disable telemetry
      export NO_COLOR=1                  # disable color
      export npm_config_build_from_source=true

      # create an editable node_modules (required by nuxt build)
      rm -rf ${cwd}/node_modules
      cp -r $node_modules ${cwd}/node_modules

      # make the node_modules directory writable (required by nuxt build)
      chmod -R u+w ${cwd}/node_modules

      # rebuild native modules (better-sqlite3) against the Nix toolchain
      yarn --offline --cwd ${cwd} rebuild better-sqlite3 || true
      (cd ${cwd}/node_modules/better-sqlite3 && npm run build-release) || true

      # build the project
      yarn --offline --cwd ${cwd} build

      # copy the vue server renderer to the .output directory
      rm -rf ${cwd}/.output/server/node_modules/vue
      cp -r ${cwd}/node_modules/vue/ ${cwd}/.output/server/node_modules/
    '';

    installPhase = ''
      # create the bin directory
      mkdir -p $out/bin

      # move the contents of the .output directory to $out
      mv deps/${package.name}/.output/* $out/

      # make the binary wrapper
      makeBinaryWrapper ${nodejs}/bin/node \
        $out/bin/${pname} \
        --add-flags "$out/server/index.mjs" \
        --prefix PATH : ${lib.makeBinPath [nixpkgs.texliveFull]}
    '';

    doDist = false;

    meta = {
      mainProgram = pname;
      description = "Vinoteqa Landing Page";
      homepage = "https://github.com/vinoteqa/wcms-landing";
    };
  }
