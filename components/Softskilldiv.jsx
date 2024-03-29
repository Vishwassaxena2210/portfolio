'use client'
import { motion } from 'framer-motion'
import { softdata } from './data'
export default function Softskilldiv() {
    const data = softdata()
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mt-5">
            {
                data.map((item, key) => {
                    return (
                        <motion.div
                            initial={{
                                y: 50,
                                opacity: 0
                            }}
                            animate={{
                                y: 0,
                                opacity: 1
                            }}
                            transition={{
                                delay: 0.1,
                                type: 'tween'
                            }}
                            key={key}
                            className="overflow-hidden flex flex-row items-center gap-3 m-3 md:hover:dark:bg-zinc-800 md:hover:bg-zinc-100 p-3 rounded-md hover:transition-all hover:duration-500 ">
                            
                            <div className="flex flex-col justify-center items-start" >
                                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight" key={key} > {item.name}</h3>
                                
                            </div>
                        </motion.div>
                    )
                })
            }
        </div>
    )
}