#touch-turntable
--------------------

面向touch的转盘抽奖单例，使用时请保持html结构，css钩子无特殊要求。

##初始化

	Turntable.init({
        items: 6,//6份奖品，请保持能被360整除。
        parent: '#turntableWrapper',//转盘界定区域(1.第一个子元素 转盘, 2.第二个子元素 指针)
        callback: function () {}//转盘动画停止后调用
    })

##处理奖品
	/**
	* @param {number} 0~(items-1);
	*/
	Turntable.goto(i);//

License
-------

	Copyright (C) 2011 Matt Patenaude.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.