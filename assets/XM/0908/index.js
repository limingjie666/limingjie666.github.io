var router = new VueRouter({
	routes: [{
		path: '/',
		component: {
			template: '#cen1',

		}
	}, {
		path: '/cen2',
		component: {
			template: '#cen2',
			
			data(){
				return{
					type1:[true,false,false,false],
					index:0
				}
			}
		}
	}, {
		path: '/cen3',
		component: {
			template: '#cen3'
		}
	}, {
		path: '/cen4',
		component: {
			template: '#cen4'
		}
	}, {
		path: '/cen5',
		component: {
			template: '#cen5'
		}
	}, ]
})


Vue.component('no1', {
	template: `<div class="list1">
				<h4 style="font-size: 15px;">
					<slot name="h4"></slot>
				</h4>
				<slot name="cen"></slot>
			</div>`,
})

Vue.component('no2', {
	template: `<div class="swiper-container rsild">
				<div class="swiper-wrapper">
					<div v-for="i in json" class="swiper-slide">
						<img :src="i">
					</div>
					<div class="swiper-pagination"></div>
				</div>
			</div>`,
	data() {
		return {
			json: [
				'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvZmVkNjAyMDAyZTZiNjRkYjVhZDg0MmEwN2U5Yjg5ODYucG5n.png',
				'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvODBkMjY5NjYzNDJmNTM1ZjdkYmEwMjY2OTNmMmQ5ZjcucG5n.png',
				'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvNzY5MDExMmQ0MjIzN2Y5YTg0OWVjNjc0N2NmOGMxYWYucG5n.png'
			]
		}
	},
})


Vue.component('no3', {
	template: `<div class="container">
				<span class="hh">
					<slot name="hh"></slot>
				</span>
				<p style="position: relative;">
					<span class="le"></span>
					<slot name="tit"></slot>
					<span class="ri"></span>
				</p>
			</div>`,
})

Vue.component('no4', {
	template: `<div>
					<div class="list" v-for="i in json">
						<div class="list-b">
							<div class="list-t">
								<p>
									<a href="#">{{i.hh}}</a>
								</p>
								<div class="xian"></div>
							</div>
							<div class="list-bo">
								<p>{{i.pp}}</p>
							</div>
							<div class="vc">
								<a href="#">→</a>
							</div>
						</div>
					</div>
			</div>`,
	data() {
		return {
			json: [{
				hh: '医疗PPP有望成后起之秀 概念股早盘活跃',
				pp: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网...'
			}, {
				hh: '医疗PPP有望成后起之秀 概念股早盘活跃',
				pp: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网...'
			}, {
				hh: '医疗PPP有望成后起之秀 概念股早盘活跃',
				pp: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网...'
			}]
		}
	}
})

Vue.component('no5', {
	template: `<div>
				<div class="list" v-for="i in json">
					<div class="list-s">
						<img :src="i.img">
						<p>{{i.p1}}</p>
						<p>{{i.p2}}</p>
					</div>
				</div>
			</div>`,
	data(){
		return{
			json:[
				{
					img:'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvMDdiNzYwNTRjMjQwOWZmN2YwM2MxZTFlMjlmOTk4YTYtMjMweDIzMC5wbmc_p_p100_p_3D.png',
					p1:'THE PROJECT',
					p2:'NAME 01'
				},
				{
					img:'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvOTAxNzllOTM4ZmFhMTgzZjhiMDFjODgwZjAzNzk3NjctMjMweDIzMC5wbmc_p_p100_p_3D.png',
					p1:'THE PROJECT',
					p2:'NAME 02'
				},
				{
					img:'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvM2JlMmUyNDFkNTM4NjBmZmRkNzMzNjNiOWJiMjdjNTMtMjMweDIzMC5wbmc_p_p100_p_3D.png',
					p1:'THE PROJECT',
					p2:'NAME 03'
				},
				{
					img:'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDcvZjZmODI0YzZlNGJlZWQ1ZDI0ZmRlZGRlZDBkZmY2ZDktMjMweDIzMC5wbmc_p_p100_p_3D.png',
					p1:'THE PROJECT',
					p2:'NAME 04'
				}
			]
		}
	}
})

Vue.component('no6', {
	template:`<div>
				<div class="limge" v-for="i in json[index]">
					<div style="height: 224px;text-align: center;margin-bottom: 10px;">
						<img :src="i.img">
					</div>
					<p style="color: #333333;font-size: 14px;">{{i.p1}}</p>
					<p style="color: #999999;font-size: 12px;">{{i.p2}}</p>
					<div class="dh"></div>
				</div>
			</div>`,
	props:['ddd'],
	data(){
		return{
			index:this.ddd,
			json:[
				[
					{
						img:'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvODliOWE1ZWI3YjZhYjZkNWZjZjFiNjEyNDAyOWFhMWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
						p1:'仪器设备Um350c',
						p2:'编辑设备副标题'
					},{
						img:'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTQ3M2MwZWI4ODE4ZmYzM2Y5OGFmYWY1ODg2N2I4ZjgtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
						p1:'仪器设备Um390i',
						p2:'编辑设备副标题'
					},{
						img:'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvY2Y4YzM5NDJmMjU5YThmYmMzMDA3OWNiMTQ2NjE2MWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
						p1:'仪器设备Um350c',
						p2:'编辑设备副标题'
					},{
						img:'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvMDE1MmFkNTI5MjBkOWM3YTY4NmM5MjZjOTNhZTczMmMtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
						p1:'仪器设备Um350c',
						p2:'编辑设备副标题'
					},{
						img:'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTVlZjIxODM2NWUyOGJiODdhNjkwNWE3NDI4N2IxNWQtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
						p1:'仪器设备Um350c',
						p2:'编辑设备副标题'
					},{
						img:'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvMjZmZDhlZTY1YmM4YTcwZWZkNGNhOWI3OWFmMDg1NWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
						p1:'仪器设备Um350c',
						p2:'编辑设备副标题'
					},{
						img:'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvN2Q4YTg0M2ZjODJjNDE3ODdkNTUxNTI1MGZjOWJjZDQtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
						p1:'仪器设备Um350c',
						p2:'编辑设备副标题'
					},{
						img:'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvMWM4ODFjMGI3Y2JlMzcwZDUwZjNlOGIzN2U1NzE5ODYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
						p1:'仪器设备Um350c',
						p2:'编辑设备副标题'
					}
				],
				[
					{
						img:'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvODliOWE1ZWI3YjZhYjZkNWZjZjFiNjEyNDAyOWFhMWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
						p1:'仪器设备Um350c',
						p2:'编辑设备副标题'
					},{
						img:'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTQ3M2MwZWI4ODE4ZmYzM2Y5OGFmYWY1ODg2N2I4ZjgtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
						p1:'仪器设备Um390i',
						p2:'编辑设备副标题'
					},{
						img:'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvY2Y4YzM5NDJmMjU5YThmYmMzMDA3OWNiMTQ2NjE2MWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
						p1:'仪器设备Um350c',
						p2:'编辑设备副标题'
					},{
						img:'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvMDE1MmFkNTI5MjBkOWM3YTY4NmM5MjZjOTNhZTczMmMtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
						p1:'仪器设备Um350c',
						p2:'编辑设备副标题'
					},{
						img:'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTVlZjIxODM2NWUyOGJiODdhNjkwNWE3NDI4N2IxNWQtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
						p1:'仪器设备Um350c',
						p2:'编辑设备副标题'
					}
				],
				[
					{
						img:'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTVlZjIxODM2NWUyOGJiODdhNjkwNWE3NDI4N2IxNWQtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
						p1:'仪器设备Um350c',
						p2:'编辑设备副标题'
					},{
						img:'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvMjZmZDhlZTY1YmM4YTcwZWZkNGNhOWI3OWFmMDg1NWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
						p1:'仪器设备Um350c',
						p2:'编辑设备副标题'
					},{
						img:'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvN2Q4YTg0M2ZjODJjNDE3ODdkNTUxNTI1MGZjOWJjZDQtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
						p1:'仪器设备Um350c',
						p2:'编辑设备副标题'
					},{
						img:'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvMWM4ODFjMGI3Y2JlMzcwZDUwZjNlOGIzN2U1NzE5ODYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
						p1:'仪器设备Um350c',
						p2:'编辑设备副标题'
					}
				],
				[
					{
						img:'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTQ3M2MwZWI4ODE4ZmYzM2Y5OGFmYWY1ODg2N2I4ZjgtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
						p1:'仪器设备Um390i',
						p2:'编辑设备副标题'
					},{
						img:'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvY2Y4YzM5NDJmMjU5YThmYmMzMDA3OWNiMTQ2NjE2MWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
						p1:'仪器设备Um350c',
						p2:'编辑设备副标题'
					},{
						img:'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvMDE1MmFkNTI5MjBkOWM3YTY4NmM5MjZjOTNhZTczMmMtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
						p1:'仪器设备Um350c',
						p2:'编辑设备副标题'
					},{
						img:'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTVlZjIxODM2NWUyOGJiODdhNjkwNWE3NDI4N2IxNWQtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
						p1:'仪器设备Um350c',
						p2:'编辑设备副标题'
					}
				]
			]
		}
	},
	watch:{
		ddd(a,b){
			this.index=a
			// console.log(a,b)
		}
	}
})

Vue.component('no7', {
	template: '#son7',
})

new Vue({
	el: '#box',
	router,
	data: {
		type:[true,false,false,false,false],
	},
	methods: {
	}
})

var swiper = new Swiper('.swiper-container', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
	},
});
