import "./home.css";

// returns a div containing all the content for home page
export function appendContent() {
  const container = document.createElement("div");

  const s1 = document.createElement("section");
  const s2 = document.createElement("section");
  const s3 = document.createElement("section");

  const s1h2 = document.createElement("h2");
  const s2h2 = document.createElement("h2");
  const s3h2 = document.createElement("h2");

  const s1p = document.createElement("p");
  const s2p = document.createElement("p");
  const s3p = document.createElement("p");

  s1h2.innerText = "Who we are";
  s2h2.innerText = "What we do";
  s3h2.innerText = "Random";

  s1p.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde excepturi assumenda non, beatae et sint aspernatur blanditiis veritatis, itaque ratione voluptatum in vitae enim nisi error! Maxime deserunt id enim sed quas debitis omnis rem facilis libero ex harum veritatis ratione quibusdam incidunt fugit et, ";

  s2p.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde excepturi assumenda non, beatae et sint aspernatur blanditiis veritatis, itaque ratione voluptatum in vitae enim nisi error! Maxime deserunt id enim sed quas debitis omnis rem facilis libero ex harum veritatis ratione quibusdam incidunt fugit et, ";

  s3p.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde excepturi assumenda non, beatae et sint aspernatur blanditiis veritatis, itaque ratione voluptatum in vitae enim nisi error! Maxime deserunt id enim sed quas debitis omnis rem facilis libero ex harum veritatis ratione quibusdam incidunt fugit et, ";

  s1.appendChild(s1h2);
  s1.appendChild(s1p);

  s1.appendChild(s2h2);
  s1.appendChild(s2p);

  s1.appendChild(s3h2);
  s1.appendChild(s3p);

  container.appendChild(s1);
  container.appendChild(s2);
  container.appendChild(s3);

  return container;
}

// export { homeCss };
