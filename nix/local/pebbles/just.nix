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
          description = "Build the frontend";
          content = "nix build .#wcms-landing";
        };

        run = {
          description = "Run the frontend";
          content = "nix run .#wcms-landing";
        };
      };
    };
  }
