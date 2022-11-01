const scene = new THREE.Scene()
scene.fog = new THREE.Fog(0xa0a0a0, 10, 50)

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(9, 3, 9)

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: document.getElementById('bg') })
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.outputEncoding = THREE.sRGBEncoding

const pmremGenerator = new THREE.PMREMGenerator(renderer)
pmremGenerator.compileEquirectangularShader()

window.addEventListener('resize', function() {

    const width = window.innerWidth
    const height = window.innerHeight
    renderer.setSize(width, height)
    camera.aspect = width / height
    camera.updateProjectionMatrix()

})

const controls = new THREE.OrbitControls(camera, renderer.domElement)
controls.enablePan = false

const hlight = new THREE.AmbientLight(0x404040, 1)
scene.add(hlight)

const directionalLight = new THREE.DirectionalLight(0xFFDFDF, 1)
directionalLight.shadow.camera.top = 4
directionalLight.shadow.camera.bottom = -4
directionalLight.shadow.camera.left = -4
directionalLight.shadow.camera.right = 4
directionalLight.shadow.camera.near = 0.1
directionalLight.shadow.camera.far = 40
directionalLight.shadow.camera.far = 40
directionalLight.shadow.bias = -0.002
directionalLight.position.set(0, 20, 20)
scene.add(directionalLight)
//scene.add( new THREE.CameraHelper( directionalLight.shadow.camera ) )









var loader = new THREE.GLTFLoader()
loader.load('asset/cube/scene.gltf', handle_load)

let cube
let cubeTop = new THREE.Group()
let cubeBtm = new THREE.Group()
function handle_load(gltf) {

    cube = gltf.scene

    cubes = [
    	{'x': 0.525, 'y': -0.525, 'z': 0.525},
    	{'x': -0.525, 'y': -0.525, 'z': 0.525},
    	{'x': 0.525, 'y': -0.525, 'z': -0.525},
    	{'x': -0.525, 'y': -0.525, 'z': -0.525},
    	{'x': 0.525, 'y': 0.525, 'z': 0.525},
    	{'x': -0.525, 'y': 0.525, 'z': 0.525},
    	{'x': 0.525, 'y': 0.525, 'z': -0.525},
    	{'x': -0.525, 'y': 0.525, 'z': -0.525}
    ]

    cubes.forEach(i => {
    	let temp = cube.clone()
    	temp.position.set(i.x, i.y, i.z)
    	
    	if(i.y > 0){ cubeTop.add(temp) }
    	if(i.y < 0){ cubeBtm.add(temp) }
    	
    	//scene.add(temp)
    })

    scene.add(cubeTop, cubeBtm)
   	animate()
}

onmousemove = e => {
	cubeTop.rotation.y += e.clientX / 20000
    cubeBtm.rotation.y -= e.clientY / 40000
}

const animate = t => {
    requestAnimationFrame(animate)

	cubeTop.rotation.y += 0.01
    cubeBtm.rotation.y -= 0.01
    cubeTop.rotation.x += 0.002
    cubeBtm.rotation.x += 0.002

    renderer.render(scene, camera)
}