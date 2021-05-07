import React from "react"

const AboutMore = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="grid grid-cols-3 h-full overflow-hidden gap-4">
        <div className="col-start-1 col-end-3 h-96 overflow-hidden rounded-xl">
          <img
            className="object-cover h-96 w-full"
            src="https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2890&q=80"
          ></img>
        </div>
        <div className="col-start-3 overflow-hidden rounded-xl h-96">
          <img
            className="object-cover h-96"
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
          ></img>
        </div>
      </div>
      <div className="grid grid-cols-4">
        <p className="col-start-3 col-end-5 text-white text-3xl leading-normal mt-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </div>
  )
}

export default AboutMore