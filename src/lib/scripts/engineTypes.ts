export type BevyComponent = DirectionalLight | Mesh3d | MeshMaterial3d | Sprite | Transform | Visibility;
export type VisibilityValue = "Inherited" | "Hidden" | "Visible";
export type AssetId = {
    id: string;
};

export function isVisibilityValue(value: any): value is VisibilityValue {
    return (
        value === "Inherited" || value === "Hidden" || value === "Visible"
    );
}
export function isAssetId(value: any): value is AssetId {
    return (
        typeof value === `object` &&
        value?.id?.startsWith?.(`AssetId<`)
    );
};

export interface Colour {
    r: number;
    g: number;
    b: number;
    a: number;
};

export interface Vec2 {
    x: number;
    y: number;
};

export interface Vec3 {
    x: number;
    y: number;
    z: number;
};
export function isVec3(value: any): value is Vec3 {
    return (
        typeof value === 'object' &&
        value &&
        'x' in value && typeof value.x === 'number' &&
        'y' in value && typeof value.y === 'number' &&
        'z' in value && typeof value.z === 'number' &&
        Object.keys(value).length === 3
    );
};

export interface Quat {
    x: number;
    y: number;
    z: number;
    w: number;
}
export function isQuat(value: any): value is Quat {
    return (
        typeof value === 'object' &&
        value &&
        'x' in value && typeof value.x === 'number' &&
        'y' in value && typeof value.y === 'number' &&
        'z' in value && typeof value.z === 'number' &&
        'w' in value && typeof value.w === 'number' &&
        Object.keys(value).length === 4
    );
};

export interface DirectionalLight {
    colour: Colour;
    intensity: number;
    shadows: boolean;
    shadowDepthBias: number;
    shadowNormalBias: number;
};
export function isDirectionalLight(value: any): value is DirectionalLight {
    return (
        typeof value === 'object' &&
        value &&
        'colour' in value && typeof value.colour === 'object' &&
        'intensity' in value && typeof value.intensity === 'number' &&
        'shadows' in value && typeof value.shadows === 'boolean' &&
        'shadowDepthBias' in value && typeof value.shadowDepthBias === 'number' &&
        'shadowNormalBias' in value && typeof value.shadowNormalBias === 'number' &&
        Object.keys(value).length === 5
    );
};

export interface Mesh3d {
    mesh: {
        // This id needs to be parsed, looks something like this: AssetId<bevy_mesh::mesh::Mesh>{ index: 0, generation: 0}
        // The index should be extracted from it, as that is the id of the mesh in the bevy engine.
        id: string;
    };
};
export function isMesh3d(value: any): value is Mesh3d {
    return (
        typeof value === 'object' &&
        value &&
        'mesh' in value && typeof value.mesh === 'object' &&
        'id' in value.mesh && typeof value.mesh.id === 'string' &&
        Object.keys(value).length === 1 &&
        Object.keys(value.mesh).length === 1
    );
};

export interface MeshMaterial3d {
    material: {
        // Needs to be parsed, just like Mesh3d.mesh.id
        id: string;
    };
};
export function isMeshMaterial3d(value: any): value is MeshMaterial3d {
    return (
        typeof value === 'object' &&
        value &&
        'material' in value && typeof value.material === 'object' &&
        'id' in value.material && typeof value.material.id === 'string' &&
        Object.keys(value).length === 1 &&
        Object.keys(value.material).length === 1
    );
};

export interface Sprite {
    image: {
        // Needs to be parsed, just like Mesh3d.mesh.id
        id: string;
    };
    textureAtlas: {
        atlasLayout: {
            // Needs to be parsed, just like Mesh3d.mesh.id
            id: string;
            textureAtlasId: number;
        };
    };
    colour: Colour;
    flip: {
        x: boolean;
        y: boolean;
    };
    customSize: Vec2;
    position: {
        min: Vec2;
        max: Vec2;
    };
    align: {
        type: "Center" | "TopLeft" | "TopRight" | "BottomLeft" | "BottomRight" | "Custom";
        // Need to figure out how exactly this position looks, it is obtained using the Debug trait, so it can really be anything
        position: string;
    };
    imageMode: {
        type: "Auto" | "Sliced" | "Tiled";
    };
};
export function isSprite(value: any): value is Sprite {
    return (
        typeof value === 'object' &&
        value &&
        'image' in value && typeof value.image === 'object' &&
        'textureAtlas' in value && typeof value.textureAtlas === 'object' &&
        'colour' in value && typeof value.colour === 'object' &&
        'flip' in value && typeof value.flip === 'object' &&
        'customSize' in value && typeof value.customSize === 'object' &&
        'position' in value && typeof value.position === 'object' &&
        'align' in value && typeof value.align === 'object' &&
        'imageMode' in value && typeof value.imageMode === 'object' &&
        Object.keys(value).length === 8
    );
};

export interface Transform {
    translation: Vec3;
    rotation: Quat;
    scale: Vec3;
};
export function isTransform(value: any): value is Transform {
    return (
        typeof value === 'object' &&
        value &&
        'translation' in value && isVec3(value.translation) &&
        'rotation' in value && isQuat(value.rotation) &&
        'scale' in value && isVec3(value.scale) &&
        Object.keys(value).length === 3
    );
};

export interface Visibility {
    visible: VisibilityValue;
};
