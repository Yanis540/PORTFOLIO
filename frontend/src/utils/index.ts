export const navDelay = 1000;
export const lottieLoaderAnimationDelay = 5000;// ms
export const logoLoaderAnimationDelay= 1000+2000 
/*
!   -   1000ms  (hexagon) 
!   -   2000ms  (logo-y  transition+delay) 
*/
export const loaderMovingDelay = 1000 //ms 
/*
!   -   1500ms: for the transition of the logo from center to the top (1000ms of transition + 500ms of delay) 

*/
export const loaderDelay = logoLoaderAnimationDelay + lottieLoaderAnimationDelay +loaderMovingDelay   //ms 