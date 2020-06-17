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
    helm_3_2_1
    nodejs_10_19_0
    python_3_7_7
    skaffold_1_10_1
  ];
}