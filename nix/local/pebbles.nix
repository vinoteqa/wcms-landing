{
  inputs,
  cell,
}: let
  inherit (inputs) nixpkgs std haumea;
  lib = nixpkgs.lib // builtins;
in
  lib.mapAttrs (_: std.lib.dev.mkNixago) (
    haumea.lib.load {
      src = ./pebbles;
      inputs = {inherit inputs cell;};
    }
  )
