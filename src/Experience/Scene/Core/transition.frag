uniform float mixRatio;
uniform sampler2D tDiffuse1;
uniform sampler2D tDiffuse2;
varying vec2 vUv;
void main() {
    vec4 texel1 = texture2D( tDiffuse1, vUv );
    vec4 texel2 = texture2D( tDiffuse2, vUv );
    gl_FragColor = mix( texel2, texel1, mixRatio );
}
