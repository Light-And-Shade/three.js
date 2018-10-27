/**
 * @author mrdoob / http://mrdoob.com/
 */

var Strings = function ( config ) {

	var language = config.getKey( 'language' );

	var values = {

		en: {

			'menubar/file': 'File',
			'menubar/file/new': 'New',
			'menubar/file/import': 'Import',
			'menubar/file/export/geometry': 'Export Geometry',
			'menubar/file/export/object': 'Export Object',
			'menubar/file/export/scene': 'Export Scene',
			'menubar/file/export/dae': 'Export DAE',
			'menubar/file/export/glb': 'Export GLB',
			'menubar/file/export/gltf': 'Export GLTF',
			'menubar/file/export/obj': 'Export OBJ',
			'menubar/file/export/stl': 'Export STL',
			'menubar/file/export/stl_binary': 'Export STL (Binary)',
			'menubar/file/publish': 'Publish',

			'menubar/edit': 'Edit',
			'menubar/edit/undo': 'Undo (Ctrl+Z)',
			'menubar/edit/redo': 'Redo (Ctrl+Shift+Z)',
			'menubar/edit/clear_history': 'Clear History',
			'menubar/edit/clone': 'Clone',
			'menubar/edit/delete': 'Delete (Del)',
			'menubar/edit/minify_shaders': 'Minify Shaders',

			'menubar/add': 'Add',
			'menubar/add/group': 'Group',
			'menubar/add/plane': 'Plane',
			'menubar/add/box': 'Box',
			'menubar/add/circle': 'Circle',
			'menubar/add/cylinder': 'Cylinder',
			'menubar/add/sphere': 'Sphere',
			'menubar/add/icosahedron': 'Icosahedron',
			'menubar/add/torus': 'Torus',
			'menubar/add/torusknot': 'TorusKnot',
			'menubar/add/lathe': 'Lathe',
			'menubar/add/sprite': 'Sprite',
			'menubar/add/pointlight': 'PointLight',
			'menubar/add/spotlight': 'SpotLight',
			'menubar/add/directionallight': 'DirectionalLight',
			'menubar/add/hemispherelight': 'HemisphereLight',
			'menubar/add/ambientlight': 'AmbientLight',
			'menubar/add/perspectivecamera': 'PerspectiveCamera',

			'menubar/play': 'Play',

			'menubar/examples': 'Examples',

			'menubar/help': 'Help',
			'menubar/help/source_code': 'Source Code',
			'menubar/help/about': 'About',

			'sidebar/scene': 'Scene',
			'sidebar/scene/background': 'Background',
			'sidebar/scene/fog': 'Fog',

			'sidebar/properties/object': 'Object',
			'sidebar/properties/geometry': 'Geometry',
			'sidebar/properties/material': 'Material',
			'sidebar/properties/script': 'Script',

			'sidebar/object/type': 'Type',
			'sidebar/object/new': 'New',
			'sidebar/object/uuid': 'UUID',
			'sidebar/object/name': 'Name',
			'sidebar/object/position': 'Position',
			'sidebar/object/rotation': 'Rotation',
			'sidebar/object/scale': 'Scale',
			'sidebar/object/fov': 'Fov',
			'sidebar/object/near': 'Near',
			'sidebar/object/far': 'Far',
			'sidebar/object/intensity': 'Intensity',
			'sidebar/object/color': 'Color',
			'sidebar/object/groundcolor': 'Ground Color',
			'sidebar/object/distance': 'Distance',
			'sidebar/object/angle': 'Angle',
			'sidebar/object/penumbra': 'Penumbra',
			'sidebar/object/decay': 'Decay',
			'sidebar/object/shadow': 'Shadow',
			'sidebar/object/cast': 'cast',
			'sidebar/object/receive': 'receive',
			'sidebar/object/visible': 'Visible',
			'sidebar/object/frustumcull': 'Frustum Cull',
			'sidebar/object/renderorder': 'Render Order',
			'sidebar/object/userdata': 'User data',

			'sidebar/geometry/type': 'Type',
			'sidebar/geometry/new': 'New',
			'sidebar/geometry/uuid': 'UUID',
			'sidebar/geometry/name': 'Name',
			'sidebar/geometry/bounds': 'Bounds',

			'sidebar/geometry/boxgeometry/width': 'Width',
			'sidebar/geometry/boxgeometry/height': 'Height',
			'sidebar/geometry/boxgeometry/depth': 'Depth',
			'sidebar/geometry/boxgeometry/widthseg': 'Width Seg',
			'sidebar/geometry/boxgeometry/heightseg': 'Height Seg',
			'sidebar/geometry/boxgeometry/depthseg': 'Depth Seg',

			'sidebar/geometry/buffergeometry/attributes': 'Attributes',
			'sidebar/geometry/buffergeometry/index': 'index',

			'sidebar/geometry/circlegeometry/radius': 'Radius',
			'sidebar/geometry/circlegeometry/segments': 'Segments',
			'sidebar/geometry/circlegeometry/thetastart': 'Theta start',
			'sidebar/geometry/circlegeometry/thetalength': 'Theta length',

			'sidebar/geometry/cylindergeometry/radiustop': 'Radius top',
			'sidebar/geometry/cylindergeometry/radiusbottom': 'Radius bottom',
			'sidebar/geometry/cylindergeometry/height': 'Height',
			'sidebar/geometry/cylindergeometry/radialsegments': 'Radial segments',
			'sidebar/geometry/cylindergeometry/heightsegments': 'Height segments',
			'sidebar/geometry/cylindergeometry/openended': 'Open ended',

			'sidebar/project': 'Project',
			'sidebar/project/title': 'Title',
			'sidebar/project/editable': 'Editable',
			'sidebar/project/vr': 'VR',
			'sidebar/project/renderer': 'Renderer',

			'sidebar/settings': 'Settings',
			'sidebar/settings/language': 'Language',
			'sidebar/settings/theme': 'Theme',

			'sidebar/settings/shortcuts/translate': 'Translate',
			'sidebar/settings/shortcuts/rotate': 'Rotate',
			'sidebar/settings/shortcuts/scale': 'Scale',
			'sidebar/settings/shortcuts/undo': 'Undo',
			'sidebar/settings/shortcuts/focus': 'Focus',

			'sidebar/settings/viewport/grid': 'Grid',

			'toolbar/translate': 'Translate',
			'toolbar/rotate': 'Rotate',
			'toolbar/scale': 'Scale',
			'toolbar/local': 'Local',

			'viewport/info/objects': 'Objects',
			'viewport/info/vertices': 'Vertices',
			'viewport/info/triangles': 'Triangles'

		},

		zh: {

			'menubar/file': '文件',
			'menubar/file/new': '新建',
			'menubar/file/import': '导入',
			'menubar/file/export/geometry': '导出几何体',
			'menubar/file/export/object': '导出物体',
			'menubar/file/export/scene': '导出场景',
			'menubar/file/export/dae': '导出DAE',
			'menubar/file/export/glb': '导出GLB',
			'menubar/file/export/gltf': '导出GLTF',
			'menubar/file/export/obj': '导出OBJ',
			'menubar/file/export/stl': '导出STL',
			'menubar/file/export/stl_binary': '导出STL(二进制)',
			'menubar/file/publish': '发布',

			'menubar/edit': '编辑',
			'menubar/edit/undo': '撤销 (Ctrl+Z)',
			'menubar/edit/redo': '重做 (Ctrl+Shift+Z)',
			'menubar/edit/clear_history': '清空历史记录',
			'menubar/edit/clone': '拷贝',
			'menubar/edit/delete': '删除 (Del)',
			'menubar/edit/minify_shaders': '压缩着色器',

			'menubar/add': '添加',
			'menubar/add/group': '组',
			'menubar/add/plane': '平面',
			'menubar/add/box': '正方体',
			'menubar/add/circle': '圆',
			'menubar/add/cylinder': '圆柱体',
			'menubar/add/sphere': '球体',
			'menubar/add/icosahedron': '二十面体',
			'menubar/add/torus': '圆环体',
			'menubar/add/torusknot': '环面纽结体',
			'menubar/add/lathe': '酒杯',
			'menubar/add/sprite': '精灵',
			'menubar/add/pointlight': '点光源',
			'menubar/add/spotlight': '聚光灯',
			'menubar/add/directionallight': '平行光',
			'menubar/add/hemispherelight': '半球光',
			'menubar/add/ambientlight': '环境光',
			'menubar/add/perspectivecamera': '透视相机',

			'menubar/play': '启动',

			'menubar/examples': '示例',

			'menubar/help': '帮助',
			'menubar/help/source_code': '源码',
			'menubar/help/about': '关于',

			'sidebar/scene': '场景',
			'sidebar/scene/background': '背景',
			'sidebar/scene/fog': '雾',

			'sidebar/properties/object': '属性',
			'sidebar/properties/geometry': '几何组件',
			'sidebar/properties/material': '材质组件',
			'sidebar/properties/script': '脚本',

			'sidebar/object/type': '类型',
			'sidebar/object/new': '更新',
			'sidebar/object/uuid': '识别码',
			'sidebar/object/name': '名称',
			'sidebar/object/position': '位置',
			'sidebar/object/rotation': '旋转',
			'sidebar/object/scale': '缩放',
			'sidebar/object/fov': '视角',
			'sidebar/object/near': '近点',
			'sidebar/object/far': '远点',
			'sidebar/object/intensity': '强度',
			'sidebar/object/color': '颜色',
			'sidebar/object/groundcolor': '基色',
			'sidebar/object/distance': '距离',
			'sidebar/object/angle': '角度',
			'sidebar/object/penumbra': '边缘',
			'sidebar/object/decay': '衰减',
			'sidebar/object/shadow': '阴影',
			'sidebar/object/cast': '产生',
			'sidebar/object/receive': '接受',
			'sidebar/object/visible': '可见性',
			'sidebar/object/frustumcull': '视锥体裁剪',
			'sidebar/object/renderorder': '渲染次序',
			'sidebar/object/userdata': '自定义数据',

			'sidebar/geometry/type': '类型',
			'sidebar/geometry/new': '更新',
			'sidebar/geometry/uuid': '识别码',
			'sidebar/geometry/name': '名称',
			'sidebar/geometry/bounds': '界限',

			'sidebar/geometry/boxgeometry/width': '宽度',
			'sidebar/geometry/boxgeometry/height': '高度',
			'sidebar/geometry/boxgeometry/depth': '深度',
			'sidebar/geometry/boxgeometry/widthseg': '宽度分段',
			'sidebar/geometry/boxgeometry/heightseg': '高度分段',
			'sidebar/geometry/boxgeometry/depthseg': '深度分段',

			'sidebar/geometry/buffergeometry/attributes': '属性',
			'sidebar/geometry/buffergeometry/index': '索引',

			'sidebar/geometry/circlegeometry/radius': '半径',
			'sidebar/geometry/circlegeometry/segments': '分段',
			'sidebar/geometry/circlegeometry/thetastart': '弧度起点',
			'sidebar/geometry/circlegeometry/thetalength': '弧度长度',

			'sidebar/geometry/cylindergeometry/radiustop': '顶部半径',
			'sidebar/geometry/cylindergeometry/radiusbottom': '底部半径',
			'sidebar/geometry/cylindergeometry/height': '高度',
			'sidebar/geometry/cylindergeometry/radialsegments': '径向分段',
			'sidebar/geometry/cylindergeometry/heightsegments': '高度分段',
			'sidebar/geometry/cylindergeometry/openended': '开端',

			'sidebar/project': '项目',
			'sidebar/project/title': '标题',
			'sidebar/project/editable': '编辑性',
			'sidebar/project/vr': '虚拟现实',
			'sidebar/project/renderer': '渲染器',

			'sidebar/settings': '设置',
			'sidebar/settings/language': '语言',
			'sidebar/settings/theme': '主题',
			'sidebar/settings/shortcuts/translate': '移动',
			'sidebar/settings/shortcuts/rotate': '旋转',
			'sidebar/settings/shortcuts/scale': '缩放',
			'sidebar/settings/shortcuts/undo': '撤销',
			'sidebar/settings/shortcuts/focus': '聚焦',
			'sidebar/settings/viewport/grid': '网格',

			'toolbar/translate': '移动',
			'toolbar/rotate': '旋转',
			'toolbar/scale': '缩放',
			'toolbar/local': '本地',

			'viewport/info/objects': '物体',
			'viewport/info/vertices': '顶点',
			'viewport/info/triangles': '三角形'

		}

	};

	return {

		getKey: function ( key ) {

			return values[ language ][ key ] || '???';

		}

	};

};
