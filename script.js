// script.js

// Lista de canciones con sus respectivos enlaces de Spotify
const songs = [
    { "link": "https://open.spotify.com/intl-es/track/68wqSzfzcx0Z3kTGYM7QwI?si=ba5b025102ef4a38" },
{ "link": "https://open.spotify.com/intl-es/track/18aTELaH4tEpIosvtJQsbI?si=58602b3811cb45bc" },
{ "link": "https://open.spotify.com/intl-es/track/1PClK6X8xYp3lQLRDa4646?si=397ca0ec64b84fd2" },
{ "link": "https://open.spotify.com/intl-es/track/1GKcB4gRub9EmAIycLo5Yj?si=f84742ca0b12410f" },
{ "link": "https://open.spotify.com/intl-es/track/30HTuEChzehAVpwjICpwD7?si=7593c24e66ba4f41" },
{ "link": "https://open.spotify.com/intl-es/track/4fal5bAC8YdKqzZc0CoAPu?si=8cf752380cb8411d" },
{ "link": "https://open.spotify.com/intl-es/track/2nv45Xpaet82QgUKtAi8lP?si=26e954c543bc46e4" },
{ "link": "https://open.spotify.com/intl-es/track/32wobu5TjU9CQDBGDTiFji?si=0d8377843be148b1" },
{ "link": "https://open.spotify.com/intl-es/track/4nJZ2u0KPjkiq1ArojrWVh?si=dcab408f02544490" },
{ "link": "https://open.spotify.com/intl-es/track/1Ktwe8cooYUIDgx5voDE4l?si=bfaf7a4599ce482b" },
{ "link": "https://open.spotify.com/intl-es/track/5aP0feamDh4YVyrMGt5jaa?si=1ac5879fd5e04c50" },
{ "link": "https://open.spotify.com/intl-es/track/5wta13J38BJOp74d9K0Exw?si=7e4e84a960b4483e" },
{ "link": "https://open.spotify.com/intl-es/track/3xoMfdqsxKwq9g55usOZIj?si=9e477b399999421f" },
{ "link": "https://open.spotify.com/intl-es/track/6zqU7s3YVqoPZD25Kg54A6?si=2a36164f08b84ef3" },
{ "link": "https://open.spotify.com/intl-es/track/6De9Kq7jkWoxrM6cH6dbvS?si=9923502286d04049" },
{ "link": "https://open.spotify.com/intl-es/track/5FucvthZzruh6WqRbIt0NW?si=95adfd93b0bc446b" },
{ "link": "https://open.spotify.com/intl-es/track/5Pez4R3btIgQO1gg2hQj2o?si=34ccce09bfd8492e" },
{ "link": "https://open.spotify.com/intl-es/track/05miJ85cvHv7QN3VXhKxFg?si=e2d418f50dab4ff5" },
{ "link": "https://open.spotify.com/intl-es/track/4QBak0ntzr4ueojex7Fbhf?si=cdeff0277ae344a1" },
{ "link": "https://open.spotify.com/intl-es/track/75Wc9CxJw4Oc60cj5LT6eV?si=346150a27d6d49a8" },
{ "link": "https://open.spotify.com/intl-es/track/74n0IFku7y58a4U5Mai6qS?si=1cb5d58e7c3f4693" },
{ "link": "https://open.spotify.com/intl-es/track/08886Eutwp8tkU1ecfNupa?si=a5ca8849fda34419" },
{ "link": "https://open.spotify.com/intl-es/track/6gn59yXPMHPLRWg77E1rn6?si=103b2ffd8ba9400d" },
{ "link": "https://open.spotify.com/intl-es/track/0GAbLkKBji4DQwMveNIHcU?si=f2a1063adb32475a" },
{ "link": "https://open.spotify.com/intl-es/track/5CHGHQT6rOi7YXapD1RjCd?si=e342a464e7cf4343" },
{ "link": "https://open.spotify.com/intl-es/track/2zKDelFt6Q1cWkMoK0frXO?si=da38e9d879d24a2d" },
{ "link": "https://open.spotify.com/intl-es/track/7MhgLQNiBqwdPZWh82Uv3g?si=7f525efeae124a43" },
{ "link": "https://open.spotify.com/intl-es/track/56DfOkKaoejaaaXQIhLc8k?si=e026b54e400d401e" },
{ "link": "https://open.spotify.com/intl-es/track/3HqjNmCAoFkkfr9LH8rXjC?si=a790f5eeeef1462e" },
{ "link": "https://open.spotify.com/intl-es/track/1jXkp4lU2UCqKO4zR7rBlb?si=a1559c6f06b94ca3" },
{ "link": "https://open.spotify.com/intl-es/track/1gF7RkVhI4EOt7kIqw7UMJ?si=39df5050f52445c6" },
{ "link": "https://open.spotify.com/intl-es/track/2ppcIfkPXx2XNiuXdWJpFu?si=7a16018eb9284e2d" },
{ "link": "https://open.spotify.com/intl-es/track/0HKSTrQ2aFOBK82upjFBkc?si=dd74190fb35d4898" },
{ "link": "https://open.spotify.com/intl-es/track/1v3dtAlBU9nhB4PNZ2boNs?si=a7e463dfdb794e51" },
{ "link": "https://open.spotify.com/intl-es/track/1wrSkFzYygsERcMHyTIBrJ?si=2af3e54d1ffb4e5a" },
{ "link": "https://open.spotify.com/intl-es/track/34ekeQbPT6CAbefZNRcXnv?si=944bf2b7df42458b" },
{ "link": "https://open.spotify.com/intl-es/track/7pvKfuxyDWoBbThTdRpa6p?si=1c41ad74b52c400a" },
{ "link": "https://open.spotify.com/intl-es/track/6G3U7IKFikSEfNrtIopt5F?si=78029e996a134ce2" },
{ "link": "https://open.spotify.com/intl-es/track/4w0Da15r9XEgX4LkqA1fkA?si=948e0318ec2b469c" },
{ "link": "https://open.spotify.com/intl-es/track/1S7yRgyaBZ2KN4HBe4dYRn?si=f9aa9f4897bb4151" },
{ "link": "https://open.spotify.com/intl-es/track/3RvdN8ojaSWh8e5cvsDIfR?si=fe60275618264c89" },
{ "link": "https://open.spotify.com/intl-es/track/2HZpHLCyap31iMoucjmoy2?si=d7d04653cf7f4c86" },
{ "link": "https://open.spotify.com/intl-es/track/0o1DkmIuDCORAuSFpwucmP?si=6a77f11c1fd94ac4" },
{ "link": "https://open.spotify.com/intl-es/track/2TC4uDnFvma7BLg1mLZu1I?si=b717b7cdc4cc4445" },
{ "link": "https://open.spotify.com/intl-es/track/44V7hXvg9FKjQd6Kc7sBve?si=398360a9a8624d2a" },
{ "link": "https://open.spotify.com/intl-es/track/7EMCWX0sQnNP1LAJ2rwkvQ?si=64bd1a27851f4caa" },
{ "link": "https://open.spotify.com/intl-es/track/459kAQCS2u6T6R7NJlrPpv?si=a6b233201d1343e5" },
{ "link": "https://open.spotify.com/intl-es/track/6SMq0w1AhNXqTYHbrFflq1?si=69b61366aacb43fb" },
{ "link": "https://open.spotify.com/intl-es/track/0eFVbTsQOwEorcYNQItLzr?si=80369dad8ae346b5" },
{ "link": "https://open.spotify.com/intl-es/track/24DGcaXdEMruvhasL2pQzK?si=a0eafa068f914a9f" },
{ "link": "https://open.spotify.com/intl-es/track/4GRlmkQoEHgKyA6FJMxyQd?si=70c64801c1d645d1" },
{ "link": "https://open.spotify.com/intl-es/track/6EcZYhFeWQebZYJS1ExiXo?si=b7e920c4718f42fb" },
{ "link": "https://open.spotify.com/intl-es/track/2UWgpg0GIn2KVKt9UIVOR2?si=22aceeeecb83444d" },
{ "link": "https://open.spotify.com/intl-es/track/4hAWBydyHdspwy2gZ4l4Jd?si=f0aa24b70a2048dc" },
{ "link": "https://open.spotify.com/intl-es/track/04EvBRdnuSN976yUeGWX8F?si=81151b3938ea44b6" },
{ "link": "https://open.spotify.com/intl-es/track/6w0cCTaDWJ2wP69FXxWXam?si=1f3ae7cd251c40a9" },
{ "link": "https://open.spotify.com/intl-es/track/24DGcaXdEMruvhasL2pQzK?si=9172549ffa3d4338" },
{ "link": "https://open.spotify.com/intl-es/track/1I3z9hrfutTB8dttGkSFn2?si=4e9abe3aeea6468c" },
{ "link": "https://open.spotify.com/intl-es/track/4SEl8909kXYro6JkN8ThWd?si=98dc6702795e408b" },
{ "link": "https://open.spotify.com/intl-es/track/75hq8C6JlnDmpM6PRkKmqf?si=5d3b404bf336431f" },
{ "link": "https://open.spotify.com/intl-es/track/6fHAcCvNBnLoFw90iEkyba?si=d4b85041a98d4006" },
{ "link": "https://open.spotify.com/intl-es/track/2hPT8zSsP6keyKLUDiLKvb?si=e09aba50bbb54eb1" },
{ "link": "https://open.spotify.com/intl-es/track/4RjSLu7bZlQlFjq5h6bf8V?si=474c148dd8824266" },
{ "link": "https://open.spotify.com/intl-es/track/1298pEn7nJv2RJoCOSlxCG?si=adcf7ea11dc6492a" },
{ "link": "https://open.spotify.com/intl-es/track/4GbSbpMPDB8Fqrv9O3DV9k?si=e555e708413f4bf3" },
{ "link": "https://open.spotify.com/intl-es/track/22TXdHiuRNn74qFozywxAn?si=84c5d70659ad4dd5" },
{ "link": "https://open.spotify.com/intl-es/track/1h66nrtOz4gVRD5MKyxJCw?si=ee0a8e625c3a4453" }
    // Agrega más canciones aquí
];

// Función para seleccionar aleatoriamente una canción
function getRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    return songs[randomIndex];
}
document.getElementById('dedicateBtn').addEventListener('click', () => {
    const song = getRandomSong();
    if (song) {
        const message = `
        ¿Cuál canción te hará vibrar esta noche? ¡Descúbrela y comparte tu emoción con el mundo! ✨
        ¡Tómale screenshot, etiqueta a los artistas y usa #almacuerdasyvoz para que todos la escuchen!
        `;
        alert(message); // Mostrar el mensaje
        window.open(song.link, '_blank'); // Abrir el enlace en una nueva pestaña
    } else {
        alert('La lista de canciones no está disponible.');
    }
});
