  "use strict";

{
	class Post{ // 親クラス
		constructor(example){
		  this.text = example;
		  this.likeCount = 0;
		}

		show(){
		  console.log(`${this.text} - ${this.likeCount} likes`);
		}

		like(){
		  this.likeCount++;
		  this.show();
		}

		// 静的メソッド
		// static showInfo(){
		//   console.log(`Post class version 1.0`);
		// }
	}

	class SponsoredPost extends Post{ // 子クラス
		constructor(example, sponsor){
		  // this.text = example;
		  // this.likeCount = 0;
		  super(example);
		  this.sponsor = sponsor;
		}

		show(){
		  super.show();
		  console.log(`${this.text} - ${this.likeCount} likes`);
		  console.log(`... sponsored by ${this.sponsor}`);
		}

		// like(){
		//   this.likeCount++;
		//   this.show();
		// }

	}

	const posts = [
	  new Post("1番目"),
	  new Post("2番目"),
	  new SponsoredPost("テスト動画", "dotinstall"),
	];

	// posts[0].like();

	// posts[0].show();
	// posts[1].show();

	// Post.showInfo();

	posts[2].show();
}