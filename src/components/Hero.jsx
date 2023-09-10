const Hero = () => {
  return (
    <main className="hero container mt-5"> {/* Agregamos mt-4 para el margen superior */}
      <div className="row">
        <div className="col-md-6">
          <div className="hero-content">
            <h1 className="display-4">YOUR FEET DESERVE THE BEST</h1> {/* Agregamos text-center para centrar el título */}
            <p className="lead"> {/* Agregamos text-center para centrar el párrafo */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dicta
              animi, sunt voluptate provident sequi, sint voluptates omnis quam
              eligendi explicabo ullam sed et labore quaerat molestias ex,
              asperiores consectetur.
            </p>
            <div className="hero-btn text-center"> {/* Agregamos text-center para centrar los botones */}
              <button className="btn-show">Show Now</button>
              <button className="secondary-btn">Category</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="hero-image">
            <img src="/img/shoe_image.png" alt="hero-logo" className="img-fluid" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
