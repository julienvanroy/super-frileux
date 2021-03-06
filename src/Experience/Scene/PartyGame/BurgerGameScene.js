import FXScene from "../Core/FXScene";
import {Mesh, MeshBasicMaterial, PlaneBufferGeometry} from "three";
import {gsap} from "gsap";
import * as Tone from "tone";


export default class BurgerGameScene extends FXScene {
    constructor() {
        super()
        this.resources = this.experience.resources
        this.synth = new Tone.PolySynth().toDestination();
        this.synth.volume.value = 14
        this.geometryPlane = new PlaneBufferGeometry(this.camera.widthVisible, this.camera.heightVisible);
    }

    load() {
        this.difficultyGameLevel = this.experience.difficultyGameLevel
        this.setWinCondition()
        const colorTexture = this.resources.items[`burgerGame${this.difficultyGameLevel}Background`]
        const material = new MeshBasicMaterial({map: colorTexture});
        const mesh = new Mesh(this.geometryPlane, material)
        this.scene.add(mesh)
        window.addEventListener("keyup", this._listener.bind(this), true);
    }

    setWinCondition() {
        this.isWin = false
        this.counterWinCondition = 0
        switch (this.difficultyGameLevel) {
            case 1:
                this.winCondition = 8
                break;
            case 2:
                this.winCondition = 18
                break;
            case 3:
                this.winCondition = 28
                break;
            default:
                return;
        }
    }

    _listener(event) {
        if (event.defaultPrevented || this.isWin) return;
        switch (event.keyCode) {
            case 32:
                const mapTexture = this.resources.items[`burgerGame${this.difficultyGameLevel}-${this.counterWinCondition}`]
                const material = new MeshBasicMaterial({map: mapTexture, transparent: true});
                const mesh = new Mesh(this.geometryPlane, material)
                mesh.position.y = 3
                this.scene.add(mesh)
                this.counterWinCondition++
                this._playSound(this.counterWinCondition);
                this.isWin = (this.counterWinCondition > this.winCondition)
                if(this.isWin) {
                    gsap.to(mesh.position, {
                        y: 0,
                        duration: 0.25
                    })
                } else {
                    gsap.to(mesh.position, {
                        y: 0,
                        duration: 0.25
                    })
                }
                break;
            default:
                return;
        }
        event.preventDefault();
    }

    _playSound() {

        switch (this.counterWinCondition) {
            case 1:
                this.synth.triggerAttackRelease("C2", "5hz");
                break;

            case 2:
                this.synth.triggerAttackRelease("D2", "5hz");
                break;

            case 3:
                this.synth.triggerAttackRelease("E2", "5hz");
                break;

            case 4:
                this.synth.triggerAttackRelease("F2", "5hz");
                break;

            case 5:
                this.synth.triggerAttackRelease("G2", "5hz");
                break;
            case 6:
                this.synth.triggerAttackRelease("A2", "5hz");
                break;
            case 7:
                this.synth.triggerAttackRelease("B2", "5hz");
                break;
            case 8:
                this.synth.triggerAttackRelease("C3", "5hz");
                break;
            case 9:
                this.synth.triggerAttackRelease("D3", "5hz");
                break;
            case 10:
                this.synth.triggerAttackRelease("E3", "5hz");
                break;
            case 11:
                this.synth.triggerAttackRelease("F3", "5hz");
                break;
            case 12:
                this.synth.triggerAttackRelease("G3", "5hz");
                break;
            case 13:
                this.synth.triggerAttackRelease("A3", "5hz");
                break;
            case 14:
                this.synth.triggerAttackRelease("B3", "5hz");
                break;
            case 15:
                this.synth.triggerAttackRelease("C4", "5hz");
                break;
            case 16:
                this.synth.triggerAttackRelease("D4", "5hz");
                break;
            case 17:
                this.synth.triggerAttackRelease("E4", "5hz");
                break;
            case 18:
                this.synth.triggerAttackRelease("F4", "5hz");
                break;
            case 19:
                this.synth.triggerAttackRelease("G4", "5hz");
                break;
            case 20:
                this.synth.triggerAttackRelease("A4", "5hz");
                break;
            case 21:
                this.synth.triggerAttackRelease("B4", "5hz");
                break;
            case 22:
                this.synth.triggerAttackRelease("C5", "5hz");
                break;
            case 23:
                this.synth.triggerAttackRelease("D5", "5hz");
                break;
            case 24:
                this.synth.triggerAttackRelease("E5", "5hz");
                break;
            case 25:
                this.synth.triggerAttackRelease("F5", "5hz");
                break;
            case 26:
                this.synth.triggerAttackRelease("G5", "5hz");
                break;
            case 27:
                this.synth.triggerAttackRelease("A5", "5hz");
                break;
            case 28:
                this.synth.triggerAttackRelease("B5", "5hz");
                break;
            case 29:
                this.synth.triggerAttackRelease("C6", "5hz");
                break;
            default:
                break;
        }
    }


    destroy() {
        super.destroy()
        window.removeEventListener("keyup", this._listener.bind(this), true);
    }
}
