import Provider from '@components/Provider'
import Nav from '@components/nav'
import '@styles/globals.css'

export const metadata = {
    title: "",
    description: ""
}
const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Provider>



                    <div className='main'>
                        <div className="gradient" />
                    </div>
                    <main className='app'>
                        <Nav />
                        {children} </main>
                </Provider>
            </body>

        </html>
    )
}

export default RootLayout