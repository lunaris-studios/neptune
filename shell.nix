{ sources ? import ./nix {} }:
let
  inherit (sources)
    lunarispkgs
    nixpkgs
  ;
in
nixpkgs.mkShell rec {
  name = "neptune";
  env = nixpkgs.buildEnv { name = name; paths = buildInputs; };
  buildInputs = with lunarispkgs; [
    nodejs_10_19_0
    skaffold_1_10_1
  ];
}