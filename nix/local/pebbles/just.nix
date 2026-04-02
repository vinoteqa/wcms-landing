{
  inputs,
  cell,
}: let
  inherit (inputs) std;
in
  std.lib.cfg.just
  // {
    data = {
      head = ''
        # List available actions
        actions:
          @just --list
      '';

      tasks = {
        build = {
          description = "Build the landing";
          content = "nix build .#wcms-landing";
        };

        run = {
          description = "Run the landing";
          content = "nix run .#wcms-landing";
        };
      };
    };
  }
