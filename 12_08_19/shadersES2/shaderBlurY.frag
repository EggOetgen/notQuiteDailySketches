
precision highp float;

uniform sampler2D tex0;

uniform float blurAmnt;

varying vec2 texCoordVarying;

// Gaussian weights from http://dev.theomader.com/gaussian-kernel-calculator/

void main()
{
	vec4 color = vec4(0.0, 0.0, 0.0, 0.0);

	color += 0.000229 * texture2D(tex0, texCoordVarying + vec2(0.0, blurAmnt * 4.0));
	color += 0.005977 * texture2D(tex0, texCoordVarying + vec2(0.0, blurAmnt * 3.0));
	color += 0.060598 * texture2D(tex0, texCoordVarying + vec2(0.0, blurAmnt * 2.0));
	color += 0.241732 * texture2D(tex0, texCoordVarying + vec2(0.0, blurAmnt * 1.0));

	color += 0.382928 * texture2D(tex0, texCoordVarying + vec2(0.0, 0.0));

	color += 0.241732 * texture2D(tex0, texCoordVarying + vec2(0.0, blurAmnt * -1.0));
	color += 0.060598 * texture2D(tex0, texCoordVarying + vec2(0.0, blurAmnt * -2.0));
	color += 0.005977 * texture2D(tex0, texCoordVarying + vec2(0.0, blurAmnt * -3.0));
	color += 0.000229 * texture2D(tex0, texCoordVarying + vec2(0.0, blurAmnt * -4.0));
    
    color += 0.000229 * texture2D(tex0, texCoordVarying + vec2(0.0, blurAmnt * 8.0));
    color += 0.005977 * texture2D(tex0, texCoordVarying + vec2(0.0, blurAmnt * 7.0));
    color += 0.060598 * texture2D(tex0, texCoordVarying + vec2(0.0, blurAmnt * 6.0));
    color += 0.241732 * texture2D(tex0, texCoordVarying + vec2(0.0, blurAmnt * 5.0));
    
//    color += 0.382928 * texture2D(tex0, texCoordVarying + vec2(0.0, 0.0));
    
    color += 0.241732 * texture2D(tex0, texCoordVarying + vec2(0.0, blurAmnt * -5.0));
    color += 0.060598 * texture2D(tex0, texCoordVarying + vec2(0.0, blurAmnt * -6.0));
    color += 0.005977 * texture2D(tex0, texCoordVarying + vec2(0.0, blurAmnt * -7.0));
    color += 0.000229 * texture2D(tex0, texCoordVarying + vec2(0.0, blurAmnt * -8.0));
	
    color /= 25.0;
    
    gl_FragColor = color;
}
