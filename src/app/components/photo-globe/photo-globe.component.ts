import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CommonModule } from '@angular/common';

interface PhotoData {
  url: string;
  description: string;
  //profileUrl: string; // LinkedIn profile URL
}

@Component({
  selector: 'app-photo-globe',
  templateUrl: './photo-globe.component.html',
  styleUrls: ['./photo-globe.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PhotoGlobeComponent implements OnInit, AfterViewInit {
  @ViewChild('rendererContainer') rendererContainer!: ElementRef;

  renderer!: THREE.WebGLRenderer;
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  controls!: OrbitControls;
  globe!: THREE.Mesh;

  hoverInfo: { x: number; y: number; description: string } | null = null;

  photoData: PhotoData[] = [
    { 
      url: 'assets/emad-essa.jpg', 
      description: 'ا.د عماد عيسى صالح محمد رئيس قسم المكتبات و المعلومات بكلية الآداب بجامعة حلوان، ونائب رئيس الاتحاد العربي للمكتبات و المعلومات',
      //profileUrl: 'https://www.linkedin.com/in/mostafa-el-helaly-1aa617158?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
    },

    { 
      url: 'assets/hesham-ismail.jpg', 
      description: 'ا.د هشام محمود عزمي رئيس الجهاز المصري للملكية الفكري أمين عام المجلس الأعلى للثقافة',
     // profileUrl: 'https://www.linkedin.com/in/yassmeenashraf95?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
    },
    { 
      url: 'assets/shaaban-khalifa.jpg', 
      description: 'أ.د شعبان خليفة عضو الاتحاد الدولي لجمعيات المكتبات ومؤسساتها (IFLA)، و رئيس مجلس إدارة الجمعية المصرية للمكتبات والمعلومات (1994 - 2019)',
      //profileUrl: 'https://www.linkedin.com/in/nada-hassan-59a27b287'
    },
    { 
      url: 'assets/abdalgalel-eltmimy.jpg', 
      description: 'ا.د عبد الجليل التميميمن مؤسسي الاتحاد العربي للمكتبات والمعلومات، وأصدر المجلة العربية للأرشيف والتوثيق والمعلومات',
      //profileUrl: 'https://www.linkedin.com/in/fatma-hamed-363a87b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    { 
      url: 'assets/salwa-milad.jpg', 
      description: 'ا.د سلوى علي ميلاد أول رائدة مصرية في تخصص الوثائق والأرشيف، عضو اللجنة العلمية الدائمة لترقية الأساتذة والأساتذة المساعدين وأمينة اللجنة العلمية الدائمة جامعة الأزهر.',
      //profileUrl: 'https://www.linkedin.com/in/kareman-baknam-sedki-8b77626a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app:'
    },
    { 
      url: 'assets/riyad.jpg', 
      description: 'أ. رياض طاهر رضوان دياب حاصل على جائزة رواد التخصص في التميز المهني، مدير مكتبة مصر العامة',
      //profileUrl: 'https://www.linkedin.com/in/kareman-baknam-sedki-8b77626a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app:'
    },
    { 
      url: 'assets/sherif-shahen.jpg', 
      description: '. أ.د شريف كامل شاهين عميد كلية الآداب السابق بجامعة القاهرة ورئيس الجمعية المصرية للمكتبات والمعلومات',
      //profileUrl: 'https://www.linkedin.com/in/kareman-baknam-sedki-8b77626a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app:'
    },
    { 
      url: 'assets/mohamed-fathy.jpg', 
      description: 'د. محمد فتحي عبد الهادي أستاذ متفرغ بقسم المكتبات بآداب القاهرة، من رواد التخصص بمصر والعالم العربي، حاز "جائزة رواد المكتبات" لجهوده في تطوير البحث العلمي والممارسات المهنية.',
      //profileUrl: 'https://www.linkedin.com/in/kareman-baknam-sedki-8b77626a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app:'
    },
     { 
      url: 'assets/mostafa-amien.jpg', 
      description: 'د. مصطفى أمين حسام الدين أستاذ مساعد متفرغ بقسم المكتبات بآداب القاهرة، حائز على "جائزة رواد المكتبات" من أكاديمية نسيج تقديرًا لإسهاماته في النظم الآلية والضبط الببليوجرافي',
      //profileUrl: 'https://www.linkedin.com/in/kareman-baknam-sedki-8b77626a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app:'
    },
    // Add more photos with descriptions and profile URLs
  ];

  // Array to store all photo objects
  photoObjects: THREE.Mesh[] = [];
  onMouseMove = (event: MouseEvent): void => {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, this.camera);
    const intersects = raycaster.intersectObjects(this.photoObjects);

    if (intersects.length > 0) {
      const hoveredPhoto = intersects[0].object as THREE.Mesh;
      
      // Get the description from userData
      const description = hoveredPhoto.userData['description'] || 'طالب بدون وصف';
      
      // Show tooltip at mouse position with description
      this.hoverInfo = {
        x: event.clientX,
        y: event.clientY - 40, // Position tooltip slightly above cursor
        description: description
      };
      
      // Change cursor to pointer to indicate clickable
      this.renderer.domElement.style.cursor = 'pointer';
    } else {
      // Hide tooltip when not hovering over a photo
      this.hoverInfo = null;
      
      // Reset cursor
      this.renderer.domElement.style.cursor = 'auto';
    }
  };

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.initThreeJs();
    this.createGlobe();
    this.addPhotosToGlobe();
    this.animate();
    
    // Add event listeners
    this.renderer.domElement.addEventListener('mousedown', this.onMouseClick.bind(this));
    this.renderer.domElement.addEventListener('mousemove', this.onMouseMove.bind(this));
    this.renderer.domElement.addEventListener('mouseleave', () => {
      this.hoverInfo = null;
    });
  }
  
  initThreeJs(): void {
    // Create scene
    this.scene = new THREE.Scene();
    
    // Create camera
    this.camera = new THREE.PerspectiveCamera(
      60, // Field of view
      window.innerWidth / window.innerHeight, // Aspect ratio
      0.1, // Near clipping plane
      1000 // Far clipping plane
    );
    this.camera.position.z = 5;
    
    // Create renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0xf0f0f0);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    
    // Add orbit controls to allow rotation with mouse/touch
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    this.scene.add(directionalLight);
    
    // Handle window resize
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }
  
  createGlobe(): void {
    // Create globe geometry
    const geometry = new THREE.SphereGeometry(2, 64, 64);
    
    // Load Earth texture
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('assets/earth-texture.jpg');
    
    // Create material with the texture
    const material = new THREE.MeshPhongMaterial({
      map: earthTexture,
      transparent: true,
      opacity: 0.8
    });
    
    // Create globe mesh
    this.globe = new THREE.Mesh(geometry, material);
    this.scene.add(this.globe);
  }
  
  addPhotosToGlobe(): void {
    // We'll create 70 photos placed around the globe
    for (let i = 0; i < 70; i++) {
      // Calculate position on sphere using spherical distribution
      const phi = Math.acos(-1 + (2 * i) / 70);
      const theta = Math.sqrt(70 * Math.PI) * phi;
      
      // Convert to Cartesian coordinates
      const x = 2.1 * Math.sin(phi) * Math.cos(theta);
      const y = 2.1 * Math.sin(phi) * Math.sin(theta);
      const z = 2.1 * Math.cos(phi);
      
      // Create photo plane
      const photoGeometry = new THREE.PlaneGeometry(0.4, 0.4);
      
      // Get photo data (cycling through available photos)
      const photoIndex = i % this.photoData.length;
      const currentPhoto = this.photoData[photoIndex];
      
      // Load texture for the photo
      const textureLoader = new THREE.TextureLoader();
      const photoTexture = textureLoader.load(currentPhoto.url);
      
      // Create material with the photo texture
      const photoMaterial = new THREE.MeshBasicMaterial({
        map: photoTexture,
        side: THREE.DoubleSide
      });
      
      // Create photo mesh
      const photo = new THREE.Mesh(photoGeometry, photoMaterial);
      
      // Store profile URL in userData
      photo.userData = {
        description: currentPhoto.description,
        originalUrl: currentPhoto.url,
        //profileUrl: currentPhoto.profileUrl
      };
      
      // Position the photo on the globe surface
      photo.position.set(x, y, z);
      
      // Make photo face outward from the center of the globe
      photo.lookAt(0, 0, 0);
      photo.rotateY(Math.PI); // Rotate to face outward
      
      // Add photo to the scene
      this.scene.add(photo);
      this.photoObjects.push(photo);
    }
  }
  
  animate(): void {
    requestAnimationFrame(() => this.animate());
    
    // Slowly rotate the globe
    this.globe.rotation.y += 0.001;
    
    // Update orbit controls
    this.controls.update();
    
    // Render scene
    this.renderer.render(this.scene, this.camera);
  }

  
  

  onMouseClick(event: MouseEvent): void {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
  
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
    raycaster.setFromCamera(mouse, this.camera);
    const intersects = raycaster.intersectObjects(this.photoObjects);
  
    if (intersects.length > 0) {
      const clickedPhoto = intersects[0].object as THREE.Mesh;
      
      // Get the profile URL from userData
      const profileUrl = clickedPhoto.userData['profileUrl'];
      
      if (profileUrl) {
        // Navigate to LinkedIn profile
        window.open(profileUrl, '_blank');
      }
    }
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x888888,
    opacity: 0.3,
    transparent: true,
  });
  
  const numberOfLines = 80; // عدد الخطوط العشوائية
  
  for (let i = 0; i < numberOfLines; i++) {
    const indexA = Math.floor(Math.random() * this.photoObjects.length);
    const indexB = Math.floor(Math.random() * this.photoObjects.length);
  
    // نتجنب توصيل النقطة بنفسها
    if (indexA !== indexB) {
      const posA = this.photoObjects[indexA].position;
      const posB = this.photoObjects[indexB].position;
  
      const geometry = new THREE.BufferGeometry().setFromPoints([posA, posB]);
      const line = new THREE.Line(geometry, lineMaterial);
      this.scene.add(line);
    }
  }
}
}