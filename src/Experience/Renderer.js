import Experience from './Experience.js'
import {WebGLRenderer} from "three";

export default class Renderer
{
    constructor()
    {
        this.experience = new Experience()
        this.canvas = this.experience.canvas
        this.sizes = this.experience.sizes

        this._setInstance()
    }

    _setInstance()
    {
        this.instance = new WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            powerPreference: "high-performance"
        })
        this.instance.setClearColor('#000')
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))
    }

    resize()
    {
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))
    }

    /*
    update()
    {
        //this.instance.render(this.scene, this.camera.instance)
    }
    */
}
