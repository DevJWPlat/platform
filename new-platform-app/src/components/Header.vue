<template>
	<header class="header">
		<div class="wrapper">
			<div class="header-wrapper">
                <!-- logo -->
                <svg xmlns="http://www.w3.org/2000/svg" width="135" height="16" viewBox="0 0 135 16" fill="none">
                    <path d="M21.3815 0.000579834H17.8514L17.8514 16H28.1337V12.9173H21.3815L21.3815 0.000579834Z" fill="#E5DFD6" />
                    <path d="M37.855 9.83366L39.5015 3.99803L41.1481 9.83366H37.855ZM37.7617 0.000152588L32.397 15.9996H35.973L36.9843 12.776H42.0188L43.0301 15.9996H46.7704L41.4072 0.000152588H37.7602H37.7617Z" fill="#E5DFD6" />
                    <path d="M49.0254 3.08152H53.3077V15.9996H56.8362V3.08152H61.1185V0.000152588H49.0254V3.08152Z" fill="#E5DFD6" />
                    <path d="M91.7948 12.9664H85.9133V3.03441H91.7948V12.9664ZM85.1611 0L82.3847 3.03441V12.9664L85.1611 15.9993H91.7948L95.3233 12.9664L95.3249 3.03441L92.5469 0H85.1611Z" fill="#E5DFD6" />
                    <path d="M66.477 15.9996H70.0055V9.51605H76.0766V6.49315H70.0055V3.03412H77.2523V0.000152588H66.477V15.9996Z" fill="#E5DFD6" />
                    <path d="M8.56461 8.01069L3.53014 7.99963V3.01098H8.56461V8.00911V8.01069ZM0 0.000717163V16.0001H3.52856V11.013V11.0241H9.3152L12.0932 8.4247V2.60013L9.31678 0.000717163H0Z" fill="#E5DFD6" />
                    <path d="M104.877 7.0745V3.01026H110.379V7.0745H104.877ZM111.132 10.0863L113.908 7.48693V2.59941L111.132 0H101.349V15.9994H104.877V10.0879H106.505L110.228 15.9994H114.066L110.341 10.0879H111.13L111.132 10.0863Z" fill="#E5DFD6" />
                    <path d="M130.789 0.000152588L127.284 6.8177L123.779 0.000152588H119.62V15.9994H122.962V4.8012L127.284 12.9004L131.607 4.8012V15.9994H134.948V0.000152588H130.789Z" fill="#E5DFD6" />
                </svg>
                <!-- /logo -->

                <nav class="main-nav">
                    <a href="#">
                        <span>Services</span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.47406 1V6.5H12.9741H13.4741V7.5H12.9741H7.47406V13V13.5H6.47406V13V7.5H0.97406H0.47406V6.5H0.97406H6.47406V1V0.5H7.47406V1Z" fill="#E5DFD6"/>
                        </svg>
                    </a>
                    <a href="#">
                        <span>Work</span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.47406 1V6.5H12.9741H13.4741V7.5H12.9741H7.47406V13V13.5H6.47406V13V7.5H0.97406H0.47406V6.5H0.97406H6.47406V1V0.5H7.47406V1Z" fill="#E5DFD6"/>
                        </svg>
                    </a>
                    <a href="#">
                        <span>Sectors</span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.47406 1V6.5H12.9741H13.4741V7.5H12.9741H7.47406V13V13.5H6.47406V13V7.5H0.97406H0.47406V6.5H0.97406H6.47406V1V0.5H7.47406V1Z" fill="#E5DFD6"/>
                        </svg>
                    </a>
                    <a href="#">
                        <span>About</span>
                    </a>
                    <a href="#">
                        <span>Insights</span>
                    </a>
                </nav>
                <div class="cta">
                    <a href="#" class="btn">
                        Start a project
                    </a>
                    <svg width="8" height="48" viewBox="0 0 8 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 40L0 48V40H8Z" fill="#E2603D"/>
                        <path d="M8 8L0 0V8H8Z" fill="#E2603D"/>
                        <rect y="8" width="8" height="32" fill="#E2603D"/>
                    </svg> 
                </div>
            </div>
		</div>
	</header>
</template>

<style scoped lang="scss">
	@import "@/scss/_variables.scss";
	@import "@/scss/_layout.scss";

    .header {
        width: 100%;
        min-height: 96px;
        backdrop-filter: blur(4px);
        align-items: flex-end;
        display: flex;
        justify-content: space-between;
        background: black;
        &-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .main-nav {
            display: flex;
                gap: 40px;
            a {
                display: flex;
                gap: 8px;
                align-items: center;
                span {
                    color: #E5DFD6;
                    font-size: 16px;
                    font-weight: 400;
                    font-family: "early-sans-variable", sans-serif;
                }
            }
        }
        .cta {

            a {
                color: black;
            }
        }
    }
</style>