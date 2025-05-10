// export default defineNuxtPlugin(() => {
//     if (process.dev) {
//         const originalWarn = console.warn
//         console.warn = (...args) => {
//             if (
//                 typeof args[0] === 'string' &&
//                 args[0].includes('Hydration')
//             ) {
//                 // подавляем предупреждение
//                 return
//             }
//             originalWarn(...args)
//         }
//     }
// })
