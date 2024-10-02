import { useEffect } from "react";

export default function Player() {
    var isRunning = false;
    useEffect(() => {
        if (isRunning) return;
        isRunning = true;
        const audio = document.getElementById("play") as HTMLAudioElement;
        function play(remove: boolean = true) {
            console.debug("[PLAYER] start play");
            // 移除事件监听器
            if (remove)
                document.removeEventListener("scrollend", () => play());
                document.removeEventListener("click", () => play());
                console.debug("[PLAYER] remove event listener");

            // 播放，重播
            audio.play();
            audio.addEventListener("ended", () => {
                audio.currentTime = 0;
                console.debug("[PLAYER] end play, replay");
                setTimeout(() => {
                    console.debug("[PLAYER] replay");
                    play(false);
                }, 1000 * 10 + Math.random() * 1000 * 10);
            });
        }

        // 在有任何操作后，自动播放音乐
        document.addEventListener("scrollend", () => play());
        document.addEventListener("click", () => play());
    })

    return (
        <audio id="play" src="/Aoharu.mp3" autoPlay style={{ display: "none" }}></audio>
    )
}