'use client'
import  robotsSlice  from '@/features/robots/robotsSlice'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'


export const store = configureStore({
  reducer: {
  
    robots:robotsSlice
  },
})


export const ReduxProvider  = ({children}) => {
    return (
        <Provider store={store} >
            {children}
        </Provider>
    )
}
