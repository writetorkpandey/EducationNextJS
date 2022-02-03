import React from 'react';

export default function BlogDetail() {
  return (
  
  <>
  {/* blog details  */}
<section className="section-sm bg-gray">
  <div className="container">
    <div className="row">
      <div className="col-12 mb-4">
        <img src="images/blog/blog-single.jpg" alt="blog-thumb" className="img-fluid w-100" />
      </div>
      <div className="col-12">
        <ul className="list-inline">
          <li className="list-inline-item mr-4 mb-3 mb-md-0 text-light"><span className="font-weight-bold mr-2">Post:</span>Somrat</li>
          <li className="list-inline-item mr-4 mb-3 mb-md-0 text-light">August 28, 2017</li>
          <li className="list-inline-item mr-4 mb-3 mb-md-0 text-light"><i className="ti-book mr-2"></i>Read 289</li>
          <li className="list-inline-item mr-4 mb-3 mb-md-0 text-light"><i className="ti-share mr-2"></i>289</li>
          <li className="list-inline-item mr-4 mb-3 mb-md-0 text-light"><a className="text-light" href="#"><i className="ti-comments mr-2"></i>265</a></li>
        </ul>
      </div>
      {/* border  */}
      <div className="col-12 mt-4">
        <div className="border-bottom border-primary"></div>
      </div>
      {/* blog contect  */}
      <div className="col-12 mb-5">
        <h2>Lorem ipsum dolor amet, consectetur adipisicing eiusmod tempor </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
          ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem s</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, </p>
      </div>
       {/* comment box  */}
      <div className="col-12">
        <form action="#" className="row">
          <div className="col-sm-6">
            <input type="text" className="form-control mb-4" id="name" name="name" placeholder="Full Name" />
          </div>
          <div className="col-sm-6">
            <input type="email" className="form-control mb-4" id="mail" name="mail" placeholder="Email Address" />
          </div>
          <div className="col-12">
            <textarea name="comment" id="comment" className="form-control mb-4" placeholder="Comment Here..."></textarea>
          </div>
          <div className="col-12">
            <button type="submit" value="send" className="btn btn-primary">post comment</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
{/* blog details  */}





  
  </>
  
  
  );
}
