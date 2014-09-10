define('modules/views/testPageView',[
	'preload',
	'main',
	'socShare',
    'slider',
	'backbone'
], function(
	preload,
	main,
	socShare,
    slider
){

	var TestPageView = Backbone.View.extend({
		initialize: function(){
			this.preloader = this.$('.preloader_box');
			this.pageBody = $('body');
			this.resultImg = this.$('.resultImg');
			this.resultComputer = this.$('.resultComputer');
			this.resultText = this.$('.result_text');
            this.resultComputerImg = this.$('.photo_pc');
            this.sliderBox = this.$('.product_preview');

			this.animateSpeed = 400;
			this.step = 0;
			this.block = false;

			this.images = [
		        'img/test_list_img_1.jpg',
		        'img/test_list_img_2.jpg',
		        'img/test_list_img_3.jpg',
		        'img/test_list_img_4.jpg',
		        'img/test_list_img_5.jpg',
		        'img/test_list_img_6.jpg',
		        'img/test_list_img_7.jpg',
		        'img/test_list_img_8.jpg',
		        'img/test_list_img_9.jpg'
		    ];

		    this.computer = {
		    	'1' : {
		    		'1' : '<a target="_blank" style="color:#0071c5; text-decoration:none;"href="http://www.svyaznoy.ru/catalog/notebook/1738/2028437?utm_source=iq.intel.ru/refresh&utm_medium=specproject&utm_content=intel&utm_campaign=intel_refresh" onClick="ga(\'send\', \'event\', \'retailers\', \'click\', \'http://www.svyaznoy.ru/catalog/notebook/1738/2028437?utm_source=iq.intel.ru/refresh&utm_medium=specproject&utm_content=intel&utm_campaign=intel_refresh\'); return true;">HP PavilionI5-3230</a>', // -
		    		'2' : '<a target="_blank" style="color:#0071c5; text-decoration:none;" href="http://www.mediamarkt.ru/item/1273159?utm_source=iq.intel.ru/refresh&utm_medium=specproject&utm_content=intel&utm_campaign=intel_refresh"  onClick="ga(\'send\', \'event\', \'retailers\', \'click\', \'http://www.mediamarkt.ru/item/1273159?utm_source=iq.intel.ru/refresh&utm_medium=specproject&utm_content=intel&utm_campaign=intel_refresh\'); return true;">DELL INSPIRON 5547</a>',
		    		'3' : '<a target="_blank" style="color:#0071c5; text-decoration:none;"href="http://www.dns-shop.ru/catalog/i195838/156-noutbuk-asus.html?utm_source=iq.intel.ru/refresh&utm_medium=specproject&utm_content=intel&utm_campaign=intel_refresh"  onClick="ga(\'send\', \'event\', \'retailers\', \'click\', \'http://www.dns-shop.ru/catalog/i195838/156-noutbuk-asus.html?utm_source=iq.intel.ru/refresh&utm_medium=specproject&utm_content=intel&utm_campaign=intel_refresh\'); return true;">ASUS K551LN'
		    	},

		    	'2' : {
		    		'1' : '<a target="_blank" style="color:#0071c5; text-decoration:none;"href="http://www.mvideo.ru/products/noutbuk-asus-k550lb-xo186h-30020582?utm_source=iq.intel.ru/refresh&utm_medium=specproject&utm_content=intel&utm_campaign=intel_refresh" onClick="ga(\'send\', \'event\', \'retailers\', \'click\', \'http://www.mvideo.ru/products/noutbuk-asus-k550lb-xo186h-30020582?utm_source=iq.intel.ru/refresh&utm_medium=specproject&utm_content=intel&utm_campaign=intel_refresh\'); return true;">ASUS K550LB-XO186H</a>', // -
		    		'2' : '<a target="_blank" style="color:#0071c5; text-decoration:none;"href="http://www.mediamarkt.ru/item/1243176?utm_source=iq.intel.ru/refresh&utm_medium=specproject&utm_content=intel&utm_campaign=intel_refresh"  onClick="ga(\'send\', \'event\', \'retailers\', \'click\', \'http://www.mediamarkt.ru/item/1243176?utm_source=iq.intel.ru/refresh&utm_medium=specproject&utm_content=intel&utm_campaign=intel_refresh\'); return true;">HP Pavilion 15-D059SR</a>',
		    		'3' : '<a target="_blank" style="color:#0071c5; text-decoration:none;"href="http://www.ulmart.ru/goods/895316?utm_source=iq.intel.ru/refresh&utm_medium=specproject&utm_content=intel&utm_campaign=intel_refresh" onClick="ga(\'send\', \'event\', \'retailers\', \'click\', \'http://www.ulmart.ru/goods/895316?utm_source=iq.intel.ru/refresh&utm_medium=specproject&utm_content=intel&utm_campaign=intel_refresh\'); return true;">ASUS X551MAV</a>'
		    	},

		    	'3' : {
		    		'1' : '<a target="_blank" style="color:#0071c5; text-decoration:none;"href="http://www.ulmart.ru/goods/910690?utm_source=iq.intel.ru/refresh&utm_medium=specproject&utm_content=intel&utm_campaign=intel_refresh" onClick="ga(\'send\', \'event\', \'retailers\', \'click\', \'http://www.ulmart.ru/goods/910690?utm_source=iq.intel.ru/refresh&utm_medium=specproject&utm_content=intel&utm_campaign=intel_refresh\'); return true;">Dell Inspiron 3147 N3530</a>',
		    		'2' : '<a target="_blank" style="color:#0071c5; text-decoration:none;"href="http://www.eldorado.ru/cat/detail/71096155?utm_source=iq.intel.ru/refresh&utm_medium=specproject&utm_content=intel&utm_campaign=intel_refresh" onClick="ga(\'send\', \'event\', \'retailers\', \'click\', \'http://www.eldorado.ru/cat/detail/71096155?utm_source=iq.intel.ru/refresh&utm_medium=specproject&utm_content=intel&utm_campaign=intel_refresh\'); return true;>Asus T100</a>',
		    		'3' : '<a target="_blank" style="color:#0071c5; text-decoration:none;"href="http://www.citilink.ru/catalog/mobile/notebooks/928407?utm_source=iq.intel.ru/refresh&utm_medium=specproject&utm_content=intel&utm_campaign=intel_refresh" onClick="ga(\'send\', \'event\', \'retailers\', \'click\', \'http://www.citilink.ru/catalog/mobile/notebooks/928407?utm_source=iq.intel.ru/refresh&utm_medium=specproject&utm_content=intel&utm_campaign=intel_refresh\'); return true;">Dell Inspiron 3147 N3530</a>'
		    	}
		    };

		    this.computerImg = {
		    	'1' : {
		    		'1' : '',
                    '2' : '',
                    '3' : '',
		    	},
                '2' : {
                    '1' : '',
                    '2' : '',
                    '3' : '',
                },
                '3' : {
                    '1' : '',
                    '2' : '',
                    '3' : '',
                }
		    };

		    this.personType = {
		    	'1' : {
		    		'1' : {
		    			'1' : 'спортсмен',
		    			'2' : 'спортсменка'
		    		},
		    		'2' : {
		    			'1' : 'прагматик',
		    			'2' : 'прагматик'
		    		},
		    		'3' : {
		    			'1' : 'выдумщик',
		    			'2' : 'выдумщица'
		    		}
		    	},

		    	'2' : {
		    		'1' : {
		    			'1' : 'творческий',
		    			'2' : 'творческая'
		    		},
		    		'2' : {
		    			'1' : 'общительный',
		    			'2' : 'общительная'
		    		},
		    		'3' : {
		    			'1' : 'работящий',
		    			'2' : 'работящая'
		    		}
		    	},

		    	'3' : {
		    		'1' : {
		    			'1' : 'Модный',
		    			'2' : 'Модная'
		    		},
		    		'2' : {
		    			'1' : 'Представительный',
		    			'2' : 'Представительная'
		    		},
		    		'3' : {
		    			'1' : 'Яркий',
		    			'2' : 'Яркая'
		    		}
		    	}
		    };

		    $(window).on('resize', function(){
				main.setMainareaMargin();
			});

			this.preloadPage();
		},

		events: {
			'click .sex_box a'             : 'saveParams',
			'click .test_list li'          : 'saveParams',
			// 'mouseenter .test_list li'     : 'animatetestOption',
			'click .soc_share a'           : 'socialsData'
		},

		preloadPage: function(){
			var self = this;
			$.preload(this.images, 1, function(last){
		        if (last) {
		        	setTimeout( function() { 
			            self.hidePreloader();
						main.setMainareaMargin();
					}, 300);
		        }
		    });
		},

		hidePreloader: function(){
			this.preloader.hide();
	        this.pageBody.removeClass('hide');
	        $(window).resize();
		},

		saveParams: function(event){
			event.preventDefault();

			if( this.block ) return;
			this.block = true;

			var answer = $(event.currentTarget).attr('data-answer'),
				obj = {};
      		obj['test_' + this.step] = answer;

			this.model.set(obj);
			this.step++;

			this.hideStep();
		},

		hideStep: function(){
			var self = this,
				hideBlock;

			if( this.step < 4 ){
				hideBlock = self.$('.test_' + self.step)
			}else{
				hideBlock = self.$('.result');
			}

			this.$('.test_' + (this.step - 1)).fadeOut(self.animateSpeed, function(){
				hideBlock.fadeIn(self.animateSpeed);
				self.block = false;

				if( self.step == 4 ){
					self.setResultImg();
					self.setResultComputer();
					self.setPersonType();
                    self.$('.buy_copmuter').fadeIn(self.animateSpeed);
                    self.createBanner();
				}
			})
		},

		createImg: function(){
			var string = ''

			_.each(this.model.toJSON(), function(value, key){
				if( key.indexOf('test_') == -1 ) return;

				if( key == 'test_0' ){

					if ( value == '1' || value == 1 ){
						string = string + '2';
					}else{
						string = string + '1';
					}

				}else{
					string = string + value;
				}
			})

			var strArray = string.split(''),
				needStr = strArray.join('-');

			this.answer = needStr;

			return needStr;
		},

		setResultImg: function(){
			this.resultImg.attr('src', 'img/result_img/' + this.createImg() + '.jpg');
		},

		setResultComputer: function(){
			var param_1 = this.model.get('test_1'),
				param_2 = this.model.get('test_3');

			var text = this.computer[param_1][param_2];
			this.resultComputer.html(text);
            
                                            
            var imageHtml = '<img src="http://iq.intel.ru/refresh/img/result_device/'+param_1+'-'+param_2+'.jpg"/>';
            this.resultComputerImg.html($(imageHtml));
		},

		setPersonType: function(){
			var string = '';

			if( this.model.get('test_0') == 2 && this.model.get('test_1') == 2 ){
				string = string + this.personType['3'][this.model.get('test_3')]['1'];
				string = string + ' ' + this.personType['2'][this.model.get('test_2')]['1'];
				string = string + ' ' + this.personType['1'][this.model.get('test_1')]['1'];
			}else{
				string = string + this.personType['3'][this.model.get('test_3')][this.model.get('test_0')];
				string = string + ' ' + this.personType['2'][this.model.get('test_2')][this.model.get('test_0')];
				string = string + ' ' + this.personType['1'][this.model.get('test_1')][this.model.get('test_0')];
			}

			this.resultText.html(string);
		},

		socialsData: function(event){
			event.preventDefault();
			var self = this,
				needData = {},
				id = parseInt($(event.currentTarget).attr('href'));

			needData.id = id;
			needData.img = 'http://iq.intel.ru/refresh/img/sharing2/' + this.answer + '.png';

			switch(id){
				case 1:
					needData.link = 'http://iq.intel.ru/refresh';
					break;
				case 2:
					needData.link = 'http://iq.intel.ru/refresh?1=2&result=' + self.answer;
					break;
				case 3:
					needData.link = 'http://iq.intel.ru/refresh/ok.php?result=' + self.answer;
					break;
			}

			socShare(needData);
		},

		animatetestOption: function(event){
			var li = $(event.currentTarget);

			li.addClass('hover');
			setTimeout(function() {
				li.removeClass('hover');
			}, 100);
		},

        createBanner: function(){
            this.sliderBox.slider();
        }
	});

	return TestPageView;
});