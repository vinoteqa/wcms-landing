{
  inputs,
  cell,
}: let
  inherit (inputs) nixpkgs std haumea;
  lib = nixpkgs.lib // builtins;
in
  lib.mapAttrs (_: std.lib.dev.mkShell) (
    haumea.lib.load {
      src = ./devshells;
      inputs = {inherit inputs cell;};
    }
  )
