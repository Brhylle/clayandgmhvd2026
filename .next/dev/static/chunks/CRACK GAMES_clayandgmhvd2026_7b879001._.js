(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/CRACK GAMES/clayandgmhvd2026/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CRACK GAMES/clayandgmhvd2026/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CRACK GAMES/clayandgmhvd2026/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/CRACK GAMES/clayandgmhvd2026/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CRACK GAMES/clayandgmhvd2026/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CRACK GAMES/clayandgmhvd2026/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CRACK GAMES/clayandgmhvd2026/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CRACK GAMES/clayandgmhvd2026/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CRACK GAMES/clayandgmhvd2026/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0', {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
            outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-10 px-4 py-2',
            sm: 'h-9 rounded-md px-3',
            lg: 'h-11 rounded-md px-8',
            icon: 'h-10 w-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/ui/button.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = 'Button';
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/CRACK GAMES/clayandgmhvd2026/components/FloatingDecorations.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingDecorations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CRACK GAMES/clayandgmhvd2026/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function FloatingDecorations() {
    const decorations = [
        {
            id: 1,
            symbol: '💕',
            top: '10%',
            left: '5%',
            delay: '0s',
            duration: '8s'
        },
        {
            id: 2,
            symbol: '🌹',
            top: '20%',
            left: '95%',
            delay: '1s',
            duration: '10s'
        },
        {
            id: 3,
            symbol: '💗',
            top: '30%',
            left: '10%',
            delay: '2s',
            duration: '9s'
        },
        {
            id: 4,
            symbol: '🌸',
            top: '40%',
            left: '90%',
            delay: '0.5s',
            duration: '11s'
        },
        {
            id: 5,
            symbol: '✨',
            top: '15%',
            left: '50%',
            delay: '1.5s',
            duration: '8s'
        },
        {
            id: 6,
            symbol: '💝',
            top: '50%',
            left: '8%',
            delay: '0.2s',
            duration: '10s'
        },
        {
            id: 7,
            symbol: '🌺',
            top: '25%',
            left: '92%',
            delay: '2.5s',
            duration: '9s'
        },
        {
            id: 8,
            symbol: '💖',
            top: '60%',
            left: '12%',
            delay: '1.2s',
            duration: '8s'
        },
        {
            id: 9,
            symbol: '⭐',
            top: '35%',
            left: '88%',
            delay: '0.8s',
            duration: '10s'
        },
        {
            id: 10,
            symbol: '🌷',
            top: '70%',
            left: '5%',
            delay: '2s',
            duration: '9s'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 pointer-events-none overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes float-up {
          0% {
            opacity: 0;
            transform: translateY(100vh) rotate(0deg);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-100vh) rotate(360deg);
          }
        }

        @keyframes sway {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(30px); }
        }

        .floating-decoration {
          animation: float-up linear infinite, sway 3s ease-in-out infinite;
          font-size: 2rem;
        }

        @media (max-width: 768px) {
          .floating-decoration {
            font-size: 1.5rem;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/FloatingDecorations.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            decorations.map((deco)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "floating-decoration absolute",
                    style: {
                        top: deco.top,
                        left: deco.left,
                        animation: `float-up ${deco.duration} linear ${deco.delay} infinite, sway 3s ease-in-out infinite`
                    },
                    children: deco.symbol
                }, deco.id, false, {
                    fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/FloatingDecorations.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/FloatingDecorations.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = FloatingDecorations;
var _c;
__turbopack_context__.k.register(_c, "FloatingDecorations");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/CRACK GAMES/clayandgmhvd2026/components/DecorateBorder.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DecorateBorder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CRACK GAMES/clayandgmhvd2026/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function DecorateBorder() {
    const topDecorations = Array.from({
        length: 15
    }).map((_, i)=>({
            id: i,
            symbol: [
                ' 💕',
                '🌹',
                '💗',
                '🌸',
                '✨',
                '💌',
                '🌺',
                '🌻',
                '🪷',
                '💐'
            ][i % 10]
        }));
    const bottomDecorations = Array.from({
        length: 15
    }).map((_, i)=>({
            id: i,
            symbol: [
                '💖',
                '🌺',
                '💝',
                '🌷',
                '⭐',
                '💓',
                '🌼',
                '🌹',
                '🪻',
                '🏵️'
            ][i % 10]
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none flex justify-between items-center px-4",
                children: topDecorations.map((deco)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl md:text-3xl animate-float",
                        style: {
                            animationDelay: `${deco.id * 0.1}s`
                        },
                        children: deco.symbol
                    }, `top-${deco.id}`, false, {
                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/DecorateBorder.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/DecorateBorder.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none flex justify-between items-end px-4",
                children: bottomDecorations.map((deco)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl md:text-3xl animate-float",
                        style: {
                            animationDelay: `${deco.id * 0.15}s`
                        },
                        children: deco.symbol
                    }, `bottom-${deco.id}`, false, {
                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/DecorateBorder.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/DecorateBorder.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = DecorateBorder;
var _c;
__turbopack_context__.k.register(_c, "DecorateBorder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CRACK GAMES/clayandgmhvd2026/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CRACK GAMES/clayandgmhvd2026/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CRACK GAMES/clayandgmhvd2026/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$components$2f$FloatingDecorations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CRACK GAMES/clayandgmhvd2026/components/FloatingDecorations.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$components$2f$DecorateBorder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CRACK GAMES/clayandgmhvd2026/components/DecorateBorder.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$react$2d$canvas$2d$confetti$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CRACK GAMES/clayandgmhvd2026/node_modules/react-canvas-confetti/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function LandingSection() {
    _s();
    const confettiRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const makeShot = (particleRatio, opts)=>{
        confettiRef.current?.({
            ...opts,
            origin: {
                y: 0.6
            },
            particleCount: Math.floor(200 * particleRatio)
        });
    };
    const fireConfetti = ()=>{
        makeShot(0.25, {
            spread: 26,
            startVelocity: 55
        });
        makeShot(0.2, {
            spread: 60
        });
        makeShot(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        });
        makeShot(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });
        makeShot(0.1, {
            spread: 120,
            startVelocity: 45
        });
    };
    const [answered, setAnswered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [noButtonPos, setNoButtonPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const noButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Playlist setup
    const playlist = [
        '/music/palagi.mp3',
        '/music/libu-libong-buwan-uuwian.mp3'
    ];
    const [currentSongIndex, setCurrentSongIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Handle song ending - play next song
    const handleSongEnd = ()=>{
        const nextIndex = (currentSongIndex + 1) % playlist.length // Loop back to start
        ;
        setCurrentSongIndex(nextIndex);
        if (audioRef.current) {
            audioRef.current.src = playlist[nextIndex];
            audioRef.current.play().catch((error)=>{
                console.log('Audio playback failed:', error);
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingSection.useEffect": ()=>{
            const checkMobile = {
                "LandingSection.useEffect.checkMobile": ()=>setIsMobile(window.innerWidth < 768)
            }["LandingSection.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return ({
                "LandingSection.useEffect": ()=>window.removeEventListener('resize', checkMobile)
            })["LandingSection.useEffect"];
        }
    }["LandingSection.useEffect"], []);
    const scrollToTimeline = ()=>{
        const timelineSection = document.getElementById('timeline-section');
        timelineSection?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    const handleYes = ()=>{
        setAnswered(true);
        fireConfetti();
        // Start playing the first song
        if (audioRef.current) {
            audioRef.current.src = playlist[0];
            audioRef.current.volume = 0.5; // Optional: adjust volume
            audioRef.current.play().catch((error)=>{
                console.log('Audio playback failed:', error);
            });
        }
        setTimeout(()=>{
            scrollToTimeline();
        }, 800);
    };
    const handleNoHover = (e)=>{
        if (!isMobile && noButtonRef.current) {
            const randomX = Math.random() * 200 - 100;
            const randomY = Math.random() * 200 - 100;
            setNoButtonPos({
                x: randomX,
                y: randomY
            });
        }
    };
    const handleNoClick = ()=>{
        if (isMobile && noButtonRef.current) {
            const randomX = Math.random() * 300 - 150;
            const randomY = Math.random() * 300 - 150;
            setNoButtonPos({
                x: randomX,
                y: randomY
            });
        }
    };
    // return statement
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 to-secondary/40 px-4 py-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: audioRef,
                onEnded: handleSongEnd
            }, void 0, false, {
                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$react$2d$canvas$2d$confetti$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onInit: ({ confetti })=>{
                    confettiRef.current = confetti;
                },
                style: {
                    position: 'fixed',
                    pointerEvents: 'none',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    zIndex: 50
                }
            }, void 0, false, {
                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        playsInline: true,
                        className: "absolute inset-0 w-full h-full object-cover opacity-30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: "/videos/first_photog.mp4",
                                type: "video/mp4"
                            }, void 0, false, {
                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: "/path-to-your-video.webm",
                                type: "video/webm"
                            }, void 0, false, {
                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
                        className: "absolute inset-0 w-full h-full object-cover opacity-30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            src: "/images/firstdatenight.jpg",
                            type: "image/jpeg"
                        }, void 0, false, {
                            fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-primary/20 to-secondary/30"
                    }, void 0, false, {
                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$components$2f$FloatingDecorations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$components$2f$DecorateBorder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float z-[1]"
            }, void 0, false, {
                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-20 right-20 w-40 h-40 bg-secondary rounded-full blur-3xl animate-float z-[1]",
                style: {
                    animationDelay: '1s'
                }
            }, void 0, false, {
                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 right-10 w-24 h-24 bg-accent border-2 border-primary/30 rounded-full blur-2xl animate-pulse-gentle z-[1]"
            }, void 0, false, {
                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-2xl mx-auto text-center space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl md:text-7xl font-bold text-foreground leading-tight",
                                children: [
                                    "Will you be my",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-primary mt-2 uppercase",
                                        children: "Valentine?"
                                    }, void 0, false, {
                                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl text-foreground/70 font-light",
                                children: "A celebration of our beautiful journey together"
                            }, void 0, false, {
                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center relative z-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-6xl animate-pulse-gentle",
                            children: "💕"
                        }, void 0, false, {
                            fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-foreground/60 text-base md:text-lg max-w-lg mx-auto leading-relaxed",
                        children: "Tuklasin ang kabanata mula sa noong ako'y umamin hanggang sa araw na ikaw ay mapa-akin ❤️."
                    }, void 0, false, {
                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-8",
                        children: !answered ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleYes,
                                    className: "bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 min-w-32",
                                    children: "Take Bouquet 💐"
                                }, void 0, false, {
                                    fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                                    lineNumber: 203,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-16 w-32 sm:w-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        ref: noButtonRef,
                                        onClick: handleNoClick,
                                        onMouseEnter: handleNoHover,
                                        onTouchStart: handleNoClick,
                                        style: {
                                            transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
                                            transition: 'transform 0.2s ease-out'
                                        },
                                        className: "absolute bg-foreground/10 hover:bg-foreground/20 text-foreground px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary/30 cursor-pointer whitespace-nowrap font-medium",
                                        children: "Throw Bouquet 😔"
                                    }, void 0, false, {
                                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                                        lineNumber: 210,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                                    lineNumber: 209,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                            lineNumber: 202,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 animate-pulse-gentle",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl md:text-3xl text-primary font-bold",
                                    children: "I knew it! 💕"
                                }, void 0, false, {
                                    fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: scrollToTimeline,
                                    className: "bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300",
                                    children: "See Our Story"
                                }, void 0, false, {
                                    fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                                    lineNumber: 230,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                            lineNumber: 226,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-16 -translate-x-1/2 flex flex-col items-center gap-2 animate-float z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-foreground/50",
                        children: "Scroll to explore"
                    }, void 0, false, {
                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-6 h-6 text-primary/70 animate-bounce",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 14l-7 7m0 0l-7-7m7 7V3"
                        }, void 0, false, {
                            fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_s(LandingSection, "ioPW2sc/05rV0bzeXt3nvov76dU=");
_c = LandingSection;
var _c;
__turbopack_context__.k.register(_c, "LandingSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimelineSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CRACK GAMES/clayandgmhvd2026/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CRACK GAMES/clayandgmhvd2026/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CRACK GAMES/clayandgmhvd2026/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CRACK GAMES/clayandgmhvd2026/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
const timelineEvents = [
    {
        id: 1,
        title: 'Sudden Confession & Redirection',
        description: `Each day I have escorted you, I mustered the courage to become firm with my feelings, but I've met with an implicit rejection. However, I never took it personally. I was actually happy that, "this time", I have done it. I was even thankful to God for that reason. But I remain on your side, because my love for you is unconditional, and my sole mission is: "I want to be with you until you leave Manila."`,
        date: 'November 11, 2025',
        position: 'left',
        image: '/images/courtship.jpg'
    },
    {
        id: 2,
        title: 'Our First Playlist',
        description: 'I created the playlist to know more about your favorite genres and artists, but it ended up being a soundtrack to our blossoming connection. It started on 12 songs, but now look how it has grown to over 250+ songs! And to even think you\'d participate adding your preferences as well, lovely, yes?',
        date: 'November 12, 2025',
        position: 'right',
        image: '/images/ourfirstplaylist.png'
    },
    {
        id: 3,
        title: 'Redemption Day',
        description: 'This was just a plain day for me, because I am not expecting that you will be falling within my embrace. I honestly think that this day will come but not too soon, maybe God had intervene to let you know that my commitment and intention is pure. But after some realizations, we\'ve seen each other\'s side for quite a while now, and became comfortable as the time passes by. Even after the implicit rejection I have received, YOU have again implicitly admitted that you have fallen for me, good thing I have fed off too many romance anime and K-Drama before XD. I have never felt more happy and relieved than that day. That simple hint made my day, and I have never felt more loved and accepted. That day, I have seen the daylight on my 23rd dark night at the end of the tunnel, and thanked God, that your love is golden.',
        date: 'November 30, 2025',
        position: 'left',
        image: '/images/lablab.png'
    },
    {
        id: 4,
        title: 'Kape-Hingahan: First Date',
        description: 'When I have discovered that your ambient type is nature and stillness under the sunset, I have planned our first date where nature is abundant and where the sun meets the horizon. Too bad we haven\'t been able to catch the sunset, but I am glad that we were able to get into a deep conversation about our past, present, and future. I have never felt more connected to you than that day.',
        date: 'December 03, 2025',
        position: 'right',
        images: [
            '/images/wearematcha.jpeg',
            '/images/firstdate3.jpeg',
            '/images/hearto.jpeg'
        ]
    },
    {
        id: 5,
        title: 'The Promised Knot & Your Softness',
        description: 'I have written a poem about the knot that I have promised to tie with you. I have also shared with you my thoughts about how I see you as my lifetime partner, and how I see our relationship. I have never felt more vulnerable and exposed than that day, but I am glad that you have accepted me for who I am, and that you have also shared your own vulnerabilities with me. That day, I have seen your softness, and it has made me fall even more in love with you. This was the first-time I ever took your hand and heard you sing with an acoustic guitar. We sang with each other.',
        date: 'December 03 - 04, 2025',
        position: 'left',
        images: [
            '/images/promised-knot.jpg',
            '/images/firstdate1.jpeg',
            '/images/firstdate4.jpeg'
        ],
        pdf: '/docs/Ang-Tali-ng-Walang-Hanggang-Pangako.pdf',
        clickableImagePdf: true
    },
    {
        id: 6,
        title: 'Our First Road Trip, Cuddle & Worship',
        description: 'Undeniably, one of the most memorable moment in my life as your romantic partner, this was the time when we are trying to catch a 6PM worship schedule on the most largest church ever made by INC. Although there are some detours that had happened, I am glad that we took it, because it made our road trip even more memorable, we held hands for the longest time possible, and I saw how your smile radiates. And the most unexpected action that you\'ve made? That sneaky snuggle with my arms, as if you don\'t want yet to go home. This was also the time when you first stepped a foot on SM North and SM Mall of Asia.',
        date: 'December 06 - 07, 2025',
        position: 'right',
        images: [
            '/images/roadtrip1.jpeg',
            '/images/roadtrip2.jpeg',
            '/images/roadtrip3.jpg',
            '/images/roadtrip4.jpeg',
            '/images/roadtrip6.jpeg',
            '/images/roadtrip5.jpeg'
        ]
    },
    {
        id: 7,
        title: 'The Day You Met My Parents and Locked Our Promises By the Bay',
        description: 'To be honest, this was one of the most nerve-wracking day for me, I don\'t know what will be their reactions are, and I am literally overthinking that they will forbid me from loving you, because of the situation that we are in, I am glad that I have been honest with my parents with you, because, my Mom said that, transparency, communication and honesty are the greatest respect that you can give to your partner, and it will start if I will be honest with my parents about you, which I believe is the foundation of every successful relationships. This was also the day, when I have gave you the copy of the first poem I have written that is all about you, my beloved partner, bestfriend, honeybunch, and every call sign you can think of. I also remember that this was the time when we have locked our promises by the bay, praying for God to give us a future that would be gentle with us, and hopefully we\'ll meet again soon. Oh! I almost forgot, the moment you have searched for couple poses? You caught me off-guarded and I can\'t help but laugh lightly, because I thought that you are just being playful, but when you\'ve practise it with me? My reasoning turned off and my heart was full. And that\s what I love about you, Clay, your unpredictability, sweet smile, soft laugh and the way you make me feel valued. I can enlist a lot more, but I\'m afraid it this\'ll go on forever XDDD.',
        date: 'December 09, 2025',
        position: 'left',
        images: [
            '/images/meet5.jpeg',
            '/images/meet6.jpeg',
            '/images/meet1.jpeg',
            '/images/meet2.jpeg',
            '/images/meet3.jpeg',
            '/images/meet4.jpg'
        ],
        pdf: '/docs/Hēo.pdf',
        clickableImagePdf: true
    },
    {
        id: 8,
        title: 'Our Love Persists Across Great Distance',
        description: 'Even after you left Manila, our love has persisted and has become even stronger. We have been able to maintain our healthy relationship through unwavering communication, trust and understanding. I remember the day that you\'ve told me that you\'ve really hated Long-Distance Relationship, that was really scary when you\'ve said it, but I am glad that our love is much stronger than of the distance that we had, because of our commitment of worshipping God through Jesus Christ, this not only reinforced our love at great distance but also amplified the frequency in which we express our love. I am so proud of us, and I know that there will be more fights between us, but I hope that you\'ll stick with me until we have resolved it through proper communication and understanding. May our love grow fonder and stronger each day, and may we continue to cherish and support each other through every challenge that comes our way. I love you, Clay, and I am so grateful to have you in my life.',
        date: 'December 10, 2025 - Present',
        position: 'right',
        images: [
            '/images/ldr1.jpg',
            '/images/ldr2.jpg',
            '/images/ldr3.jpg',
            '/images/ldr4.jpg'
        ]
    }
];
// PDF Modal Component
function PdfModal({ pdfUrl, onClose }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PdfModal.useEffect": ()=>{
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
            return ({
                "PdfModal.useEffect": ()=>{
                    document.body.style.overflow = 'unset';
                }
            })["PdfModal.useEffect"];
        }
    }["PdfModal.useEffect"], []);
    // Close on escape key
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PdfModal.useEffect": ()=>{
            const handleEscape = {
                "PdfModal.useEffect.handleEscape": (e)=>{
                    if (e.key === 'Escape') onClose();
                }
            }["PdfModal.useEffect.handleEscape"];
            window.addEventListener('keydown', handleEscape);
            return ({
                "PdfModal.useEffect": ()=>window.removeEventListener('keydown', handleEscape)
            })["PdfModal.useEffect"];
        }
    }["PdfModal.useEffect"], [
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-5xl h-[90vh] bg-white rounded-lg shadow-2xl animate-scale-pop",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "absolute -top-4 -right-4 z-10 w-12 h-12 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center",
                    "aria-label": "Close PDF viewer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-6 w-6",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M6 18L18 6M6 6l12 12"
                        }, void 0, false, {
                            fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                    src: pdfUrl,
                    className: "w-full h-full rounded-lg",
                    title: "PDF Viewer"
                }, void 0, false, {
                    fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
            lineNumber: 114,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_s(PdfModal, "3ubReDTFssvu4DHeldAg55cW/CI=");
_c = PdfModal;
// Carousel component for multiple images
function ImageCarousel({ images, alt }) {
    _s1();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageCarousel.useEffect": ()=>{
            if (images.length <= 1) return;
            const interval = setInterval({
                "ImageCarousel.useEffect.interval": ()=>{
                    setCurrentIndex({
                        "ImageCarousel.useEffect.interval": (prevIndex)=>(prevIndex + 1) % images.length
                    }["ImageCarousel.useEffect.interval"]);
                }
            }["ImageCarousel.useEffect.interval"], 3000);
            return ({
                "ImageCarousel.useEffect": ()=>clearInterval(interval)
            })["ImageCarousel.useEffect"];
        }
    }["ImageCarousel.useEffect"], [
        images.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-48 md:h-64 rounded-lg overflow-hidden bg-secondary/30",
        children: [
            images.map((img, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: img,
                        alt: `${alt} - Image ${index + 1}`,
                        fill: true,
                        className: "object-cover",
                        sizes: "(max-width: 768px) 100vw, 50vw",
                        priority: index === 0
                    }, void 0, false, {
                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this)
                }, index, false, {
                    fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this)),
            images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10",
                children: images.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentIndex(index),
                        className: `w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/75'}`,
                        "aria-label": `Go to image ${index + 1}`
                    }, index, false, {
                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                        lineNumber: 184,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                lineNumber: 182,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_s1(ImageCarousel, "tPjzCc9H5UuFdWNuAHYoD0K4UOk=");
_c1 = ImageCarousel;
function TimelineSection() {
    _s2();
    const [animatedItems, setAnimatedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pdfModalUrl, setPdfModalUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimelineSection.useEffect": ()=>{
            const timers = timelineEvents.map({
                "TimelineSection.useEffect.timers": (event, index)=>{
                    return setTimeout({
                        "TimelineSection.useEffect.timers": ()=>{
                            setAnimatedItems({
                                "TimelineSection.useEffect.timers": (prev)=>[
                                        ...prev,
                                        event.id
                                    ]
                            }["TimelineSection.useEffect.timers"]);
                        }
                    }["TimelineSection.useEffect.timers"], index * 200);
                }
            }["TimelineSection.useEffect.timers"]);
            return ({
                "TimelineSection.useEffect": ()=>timers.forEach({
                        "TimelineSection.useEffect": (timer)=>clearTimeout(timer)
                    }["TimelineSection.useEffect"])
            })["TimelineSection.useEffect"];
        }
    }["TimelineSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "timeline-section",
        className: "jsx-61807d846ecb1b74" + " " + "relative py-20 md:py-32 px-4 bg-gradient-to-b from-secondary/40 to-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-61807d846ecb1b74" + " " + "max-w-4xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDelay: '0.1s'
                        },
                        className: "jsx-61807d846ecb1b74" + " " + "relative text-center mb-16 md:mb-24 animate-slide-in-left overflow-hidden rounded-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-61807d846ecb1b74" + " " + "absolute inset-0 z-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        autoPlay: true,
                                        loop: true,
                                        muted: true,
                                        playsInline: true,
                                        className: "jsx-61807d846ecb1b74" + " " + "absolute inset-0 w-full h-full object-cover opacity-30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                                src: "/videos/second_date.mp4",
                                                type: "video/mp4",
                                                className: "jsx-61807d846ecb1b74"
                                            }, void 0, false, {
                                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                lineNumber: 228,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                                src: "/videos/timeline-background.webm",
                                                type: "video/webm",
                                                className: "jsx-61807d846ecb1b74"
                                            }, void 0, false, {
                                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                lineNumber: 229,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-61807d846ecb1b74" + " " + "absolute inset-0 bg-gradient-to-b from-primary/20 to-secondary/30"
                                    }, void 0, false, {
                                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-61807d846ecb1b74" + " " + "relative z-10 py-12 px-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-61807d846ecb1b74" + " " + "text-4xl md:text-5xl font-bold text-foreground mb-4",
                                        children: "Our Love Timeline"
                                    }, void 0, false, {
                                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-61807d846ecb1b74" + " " + "text-foreground/60 text-lg",
                                        children: "From strangers to soulmates - a timeline of our unforgettable journey together."
                                    }, void 0, false, {
                                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-61807d846ecb1b74" + " " + "mt-6 relative z-20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-61807d846ecb1b74" + " " + "text-5xl md:text-6xl animate-pulse-gentle",
                                            children: "💕"
                                        }, void 0, false, {
                                            fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                            lineNumber: 242,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-61807d846ecb1b74" + " " + "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    animationDelay: '0.2s'
                                },
                                className: "jsx-61807d846ecb1b74" + " " + "absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-primary/20 animate-timeline-line"
                            }, void 0, false, {
                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-61807d846ecb1b74" + " " + "space-y-12 md:space-y-20",
                                children: timelineEvents.map((event, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-61807d846ecb1b74" + " " + `flex ${event.position === 'right' ? 'flex-row-reverse' : 'flex-row'} gap-4 md:gap-8 ${animatedItems.includes(event.id) ? event.position === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left' : 'opacity-0'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-61807d846ecb1b74" + " " + "w-full md:w-1/2 flex items-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-61807d846ecb1b74" + " " + "bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 md:p-8 w-full border border-secondary/50 group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-61807d846ecb1b74" + " " + "flex items-center gap-3 mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-61807d846ecb1b74" + " " + "text-3xl",
                                                                    children: [
                                                                        index === 0 && '🫠',
                                                                        index === 1 && '🎧',
                                                                        index === 2 && '✨',
                                                                        index === 3 && '👫',
                                                                        index === 4 && '🪢',
                                                                        index === 5 && '⛪',
                                                                        index === 6 && '🔐',
                                                                        index === 7 && '🤗'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                                    lineNumber: 266,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-61807d846ecb1b74" + " " + "text-sm font-semibold text-primary",
                                                                    children: event.date
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                                    lineNumber: 276,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-61807d846ecb1b74" + " " + "text-xl md:text-2xl font-bold text-foreground mb-2",
                                                            children: event.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                            lineNumber: 278,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-61807d846ecb1b74" + " " + "text-foreground/70 leading-relaxed",
                                                            children: event.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                            lineNumber: 281,
                                                            columnNumber: 21
                                                        }, this),
                                                        event.images && event.images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-61807d846ecb1b74" + " " + "mt-4",
                                                            children: event.clickableImagePdf && event.pdf ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setPdfModalUrl(event.pdf),
                                                                className: "jsx-61807d846ecb1b74" + " " + "w-full transition-transform hover:scale-[1.02] relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageCarousel, {
                                                                        images: event.images,
                                                                        alt: event.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                                        lineNumber: 293,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-61807d846ecb1b74" + " " + "absolute inset-0 flex items-center justify-center pointer-events-none z-20",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-61807d846ecb1b74" + " " + "bg-primary text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce-gentle",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                    fill: "none",
                                                                                    viewBox: "0 0 24 24",
                                                                                    stroke: "currentColor",
                                                                                    className: "jsx-61807d846ecb1b74" + " " + "h-5 w-5",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        strokeWidth: 2,
                                                                                        d: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
                                                                                        className: "jsx-61807d846ecb1b74"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                                                        lineNumber: 304,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                                                    lineNumber: 297,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "jsx-61807d846ecb1b74" + " " + "text-sm font-semibold whitespace-nowrap",
                                                                                    children: "Click me to read poem"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                                                    lineNumber: 306,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                                            lineNumber: 296,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                                        lineNumber: 295,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                                lineNumber: 289,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageCarousel, {
                                                                images: event.images,
                                                                alt: event.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                                lineNumber: 311,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                            lineNumber: 287,
                                                            columnNumber: 23
                                                        }, this),
                                                        !event.images && event.image && event.clickableImagePdf && event.pdf && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-61807d846ecb1b74" + " " + "mt-4 relative group/image",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setPdfModalUrl(event.pdf),
                                                                className: "jsx-61807d846ecb1b74" + " " + "relative h-48 md:h-64 w-full rounded-lg overflow-hidden bg-secondary/30 block transition-transform hover:scale-[1.02]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: event.image,
                                                                        alt: event.title,
                                                                        fill: true,
                                                                        className: "object-cover",
                                                                        sizes: "(max-width: 768px) 100vw, 50vw",
                                                                        priority: index < 2
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                                        lineNumber: 323,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-61807d846ecb1b74" + " " + "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                                        lineNumber: 333,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-61807d846ecb1b74" + " " + "absolute inset-0 flex items-center justify-center pointer-events-none",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-61807d846ecb1b74" + " " + "bg-primary text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce-gentle pointer-events-auto",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                    fill: "none",
                                                                                    viewBox: "0 0 24 24",
                                                                                    stroke: "currentColor",
                                                                                    className: "jsx-61807d846ecb1b74" + " " + "h-5 w-5",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        strokeWidth: 2,
                                                                                        d: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
                                                                                        className: "jsx-61807d846ecb1b74"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                                                        lineNumber: 345,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                                                    lineNumber: 338,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "jsx-61807d846ecb1b74" + " " + "text-sm font-semibold whitespace-nowrap",
                                                                                    children: "Click me to read poem"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                                                    lineNumber: 347,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                                            lineNumber: 337,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                                        lineNumber: 336,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                                lineNumber: 319,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 23
                                                        }, this),
                                                        !event.images && event.image && !event.clickableImagePdf && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-61807d846ecb1b74" + " " + "mt-4 rounded-lg overflow-hidden bg-secondary/30 h-48 md:h-64 relative",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: event.image,
                                                                alt: event.title,
                                                                fill: true,
                                                                className: "object-cover hover:scale-105 transition-transform duration-300",
                                                                sizes: "(max-width: 768px) 100vw, 50vw",
                                                                priority: index < 2
                                                            }, void 0, false, {
                                                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                            lineNumber: 356,
                                                            columnNumber: 23
                                                        }, this),
                                                        event.video && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-61807d846ecb1b74" + " " + "mt-4 rounded-lg overflow-hidden bg-secondary/30 h-48 md:h-64",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                                controls: true,
                                                                preload: "metadata",
                                                                poster: event.image,
                                                                className: "jsx-61807d846ecb1b74" + " " + "w-full h-full object-cover",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                                                        src: event.video,
                                                                        type: "video/mp4",
                                                                        className: "jsx-61807d846ecb1b74"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                                        lineNumber: 377,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                                                        src: event.video.replace('.mp4', '.webm'),
                                                                        type: "video/webm",
                                                                        className: "jsx-61807d846ecb1b74"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                                        lineNumber: 378,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Your browser does not support the video tag."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                                lineNumber: 371,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                            lineNumber: 370,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                lineNumber: 263,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-61807d846ecb1b74" + " " + "hidden md:flex w-1/2 items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        animationDelay: `${index * 0.2 + 0.3}s`
                                                    },
                                                    className: "jsx-61807d846ecb1b74" + " " + `w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg ${animatedItems.includes(event.id) ? 'animate-scale-pop' : 'opacity-0'}`
                                                }, void 0, false, {
                                                    fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                                lineNumber: 386,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, event.id, true, {
                                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            pdfModalUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PdfModal, {
                pdfUrl: pdfModalUrl,
                onClose: ()=>setPdfModalUrl(null)
            }, void 0, false, {
                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
                lineNumber: 404,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "61807d846ecb1b74",
                children: "@keyframes bounce-gentle{0%,to{transform:translateY(0)}50%{transform:translateY(-10px)}}.animate-bounce-gentle.jsx-61807d846ecb1b74{animation:2s ease-in-out infinite bounce-gentle}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx",
        lineNumber: 216,
        columnNumber: 5
    }, this);
}
_s2(TimelineSection, "N00KGJsskWSV3aprLP25/7Eeck4=");
_c2 = TimelineSection;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "PdfModal");
__turbopack_context__.k.register(_c1, "ImageCarousel");
__turbopack_context__.k.register(_c2, "TimelineSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CounterSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CRACK GAMES/clayandgmhvd2026/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CRACK GAMES/clayandgmhvd2026/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function CounterSection({ loveStartDate }) {
    _s();
    const [timeElapsed, setTimeElapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CounterSection.useEffect": ()=>{
            const calculateTimeElapsed = {
                "CounterSection.useEffect.calculateTimeElapsed": ()=>{
                    const now = new Date();
                    const diff = now.getTime() - loveStartDate.getTime();
                    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                    const hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                    const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
                    const seconds = Math.floor(diff % (1000 * 60) / 1000);
                    setTimeElapsed({
                        days,
                        hours,
                        minutes,
                        seconds
                    });
                }
            }["CounterSection.useEffect.calculateTimeElapsed"];
            calculateTimeElapsed();
            const interval = setInterval(calculateTimeElapsed, 1000);
            return ({
                "CounterSection.useEffect": ()=>clearInterval(interval)
            })["CounterSection.useEffect"];
        }
    }["CounterSection.useEffect"], [
        loveStartDate
    ]);
    const formatNumber = (num)=>String(num).padStart(2, '0');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative py-20 md:py-32 px-4 bg-gradient-to-b from-background via-secondary/20 to-primary/5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
            }, void 0, false, {
                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        playsInline: true,
                        className: "absolute inset-0 w-full h-full object-cover opacity-30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: "/videos/second_date.mp4",
                                type: "video/mp4"
                            }, void 0, false, {
                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: "/videos/timeline-background.webm",
                                type: "video/webm"
                            }, void 0, false, {
                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                        lineNumber: 51,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-primary/20 to-secondary/30"
                    }, void 0, false, {
                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                lineNumber: 50,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-10 left-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl"
            }, void 0, false, {
                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-12 md:mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-5xl font-bold text-foreground mb-4",
                                children: [
                                    "Time Since You Admitted",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-primary mt-2",
                                        children: "You Fell Harder For Me"
                                    }, void 0, false, {
                                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-foreground/60 text-lg",
                                children: "November 30, 2025 at 9:01:32 PM"
                            }, void 0, false, {
                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CounterCard, {
                                label: "Days",
                                value: timeElapsed.days
                            }, void 0, false, {
                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CounterCard, {
                                label: "Hours",
                                value: timeElapsed.hours
                            }, void 0, false, {
                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CounterCard, {
                                label: "Minutes",
                                value: timeElapsed.minutes
                            }, void 0, false, {
                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CounterCard, {
                                label: "Seconds",
                                value: timeElapsed.seconds
                            }, void 0, false, {
                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-lg border border-secondary/50 p-8 md:p-12 text-center space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl md:text-3xl font-bold text-foreground capitalize",
                                children: "💕 Every moment with you is precious ✨"
                            }, void 0, false, {
                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-foreground/70 text-lg leading-relaxed",
                                children: "Ever since you've kindly rejected me up until that beautiful moment where you've told me that you want me as your husband living under one roof, every single second has been filled with love, joy, and gratitude. You are my greatest blessing, and I cherish every moment we share together, may it be distant. Happy Valentine's Day to the one who makes my heart skip a beat, and my future wife."
                            }, void 0, false, {
                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center gap-4 pt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl animate-bounce",
                                        children: "💚"
                                    }, void 0, false, {
                                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl animate-bounce",
                                        style: {
                                            animationDelay: '0.1s'
                                        },
                                        children: "🤍"
                                    }, void 0, false, {
                                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl animate-bounce",
                                        style: {
                                            animationDelay: '0.2s'
                                        },
                                        children: "❤️"
                                    }, void 0, false, {
                                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 md:mt-16 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-foreground/60 italic text-lg max-w-2xl mx-auto",
                            children: '"In a world where you can be with anyone, you chose to be mine. This was the best commitment and compliment, I have ever made and had, and I will cherish it forever. Happy Valentine\'s Day, My Love. ❤️✨" ~gm'
                        }, void 0, false, {
                            fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(CounterSection, "Zp8/F4OmSeJruMw6j789oORMlns=");
_c = CounterSection;
function CounterCard({ label, value }) {
    const formatNumber = (num)=>String(num).padStart(2, '0');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-br from-primary/10 to-secondary/30 rounded-lg border-2 border-primary/30 p-6 md:p-8 text-center hover:shadow-lg transition-shadow hover:border-primary/60",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-4xl md:text-5xl font-bold text-primary mb-2",
                children: formatNumber(value)
            }, void 0, false, {
                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm md:text-base font-semibold text-foreground/70 uppercase tracking-wider",
                children: label
            }, void 0, false, {
                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_c1 = CounterCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "CounterSection");
__turbopack_context__.k.register(_c1, "CounterCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/CRACK GAMES/clayandgmhvd2026/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CRACK GAMES/clayandgmhvd2026/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$components$2f$LandingSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CRACK GAMES/clayandgmhvd2026/components/LandingSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$components$2f$TimelineSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CRACK GAMES/clayandgmhvd2026/components/TimelineSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$components$2f$CounterSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CRACK GAMES/clayandgmhvd2026/components/CounterSection.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full overflow-hidden bg-gradient-to-b from-background to-secondary/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$components$2f$LandingSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/app/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$components$2f$TimelineSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/app/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CRACK__GAMES$2f$clayandgmhvd2026$2f$components$2f$CounterSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                loveStartDate: new Date('2025-11-30T21:01:32')
            }, void 0, false, {
                fileName: "[project]/CRACK GAMES/clayandgmhvd2026/app/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/CRACK GAMES/clayandgmhvd2026/app/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=CRACK%20GAMES_clayandgmhvd2026_7b879001._.js.map