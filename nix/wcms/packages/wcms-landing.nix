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
      "graphql"
      "i18n"
      "layouts"
      "lib"
      "middleware"
      "pages"
      "plugins"
      "public"
      "server"
      "stores"
      "types"
      "utils"
      "nuxt.config.ts"
      "package.json"
      "tsconfig.json"
      "yarn.lock"
    ];

    nodejs = nixpkgs.nodejs_22;
    nativeBuildInputs = [nixpkgs.makeBinaryWrapper];

    buildPhase = let
      cwd = "deps/${package.name}";
    in ''
      export HOME=$(mktemp -d)           # temporary home directory
      export NODE_ENV=production         # production environment
      export CI=1                        # CI environment
      export NUXT_TELEMETRY_DISABLED=1   # disable telemetry
      export NO_COLOR=1                  # disable color

      # create an editable node_modules (required by nuxt build)
      rm -rf ${cwd}/node_modules
      cp -r $node_modules ${cwd}/node_modules

      # make the node_modules directory writable (required by nuxt build)
      chmod -R u+w ${cwd}/node_modules

      # build the project
      yarn --offline build

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
