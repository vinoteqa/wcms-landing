{
  inputs,
  cell,
}: let
  inherit (inputs) nixpkgs std;
in {
  name = "WCMS Admin Portal";

  imports = [
    std.std.devshellProfiles.default
  ];

  nixago = with cell.pebbles; [
    editorconfig
    just
  ];

  packages = with nixpkgs; [
    nil
    shfmt
    alejandra
  ];

  commands = [
    {
      category = "command runner";
      package = nixpkgs.just;
    }
    {
      category = "development";
      package = nixpkgs.nodejs;
    }
    {
      category = "development";
      package = nixpkgs.yarn;
    }
    {
      category = "development";
      package = nixpkgs.texlive.combined.scheme-full;
    }
  ];
}
