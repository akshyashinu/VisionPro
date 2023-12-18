import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>   
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter your name"/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email"/>
                </div>
                <div>
                    <label>Message</label>
                    <input name="message" id="message" placeholder="Tell Us about ur query..."/>
                </div>
                <button type="submit">Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact