import React, { PropsWithChildren } from 'react'




const AppContainer = ({ children }: PropsWithChildren) => {
    return (
        <div className='max-w-[800px] mx-auto h-screen px-8'>
            {children}
        </div>
    )
}

export default AppContainer