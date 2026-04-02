{
  inputs,
  cell,
}: let
  inherit (inputs) haumea;
in
  haumea.lib.load {
    src = ./packages;
    inputs = {inherit inputs cell;};
  }
