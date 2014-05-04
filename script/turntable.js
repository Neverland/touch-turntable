/**
 * Created by enix@foxmail.com on 2014/5/4.
 */

!function (window, doc, undefined) {
	Turntable = new function() {
		var indictator = arguments.callee,
			fn = indictator.prototype,
			that = this,
			method = {
				setting : function () {

					'number' === typeof(this.items) || (this.items = 6);
					'function' === typeof(this.callback) || (this.callback=function(){})
					'number' === typeof(this.times) || (this.times = 6);

					this.running = false;
					this._angle = 0;
					this.angle = 360 * this.items;
					this.arc = (360 / this.items);

					return this;
				},
				addEvent: function () {
					this.$turntable.addEventListener('webkitTransitionEnd', function(){

						that.running = false;
						that.callback.call(that);

					},false)
				},
				clear: function (){

					this.$turntable.style.cssText = '-webkit-transform: rotateZ(0deg);';
					return this;

				},
				goto: function (index) {

					if(this.running) return;

					index = index || 0;
					index = Math.min(this.items,index);
					index = Math.max(index,0);

					this.clear();

					setTimeout(function (){
						this.start(index);
					}.bind(this), 0)

					return this;
				},
				cssRules: function (data) {

					var css = [],

						distance = function(number){
							number  = Math.abs(parseInt(number)|0);

							that._angle = (number * that.arc + that.angle);
							return '-webkit-transform: rotateZ('+ that._angle +'deg);';
						};

					data || css.push(distance(0));

					'string' === typeof(data) && css.push(data);
					'number' === typeof(data) && css.push(distance(data));

					css.push('-webkit-transform-origin: center center; -webkit-transition: all '+ Math.abs(this.times) + 's ease-in-out;')

					return css.join(',');

				},
				start: function (n) {
					this.running = true;
					this.$turntable.style.cssText = this.cssRules(n);
				}
			};



		function extend(a, b) {
			Object.keys(b).forEach(function (x) {

				a[x] || (a[x] = b[x]);

			})
		}



		extend(fn,method);

		fn.init || (fn.init = function (O) {

			if(!({}).toString.call(O).indexOf('Object') || !O.parent || (('string' !==typeof(O.parent) && O.parent.hasOwnProperty('nodeName')))){
				return false;
			}

			['parent', 'turntable', 'indictor', 'angle', '_angle', 'arc', 'running'].forEach(function (a) {
				that[a] = null;
			});

			this.parent = doc.querySelector(O.parent);
			if(!this.parent || this.parent.children.length!==2) return this;

			this.$turntable = this.parent.children[0];
			this.$indictor = this.parent.children[1];


			extend(that,O);

			this.setting().addEvent();

		})
		return this;
	}
}(this, document)