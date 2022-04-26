//** THis is the host path that contain frontend and backend directories */

export const hostDIR = window.location.host;

// the app structure were set "backend directory inside frontend directory"

//** This is the path link to backend directory */
export const backendDirectory = /* hostDIR +*/  '/LittleDanangServerSide';
// export const backendDirectory = "http://localhost:8888/LittleDanangServerSide"; //;

export const backendURL = backendDirectory + "/addsession.php";
export const deleteOverdatedSessionURL = backendDirectory + '/deleteOverdatedSession.php';
