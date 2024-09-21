const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      <input type="text" className="input" placeholder="Full Name" />
      <input type="text" className="input" placeholder="Email Address" />
      <input type="text" className="input" placeholder="Phone Number" />
      <textarea className="textarea mb-2" placeholder="Your Message" />
      <button type="submit" className="btn self-start">Submit</button>
    </form>
  )
}

export default Form
