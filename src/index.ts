abstract class Character {
  abstract get getName(): string;
  introduce(): void {
    console.log(`I am ${this.getName}`);
  }
  abstract attack(): void;
  abstract speak(): void;
}

class Luffy extends Character {
  get getName(): string {
    return "Monkey D. Luffy";
  }
  attack(): void {
    console.log(`${this.getName}: Gomu Gomu no Jet Pistol!`);
  }
  speak(): void {
    console.log("Luffy: --Kaizoku ou ni ore wa naru--");
  }
  navigate<T>(island: T): void {
    console.log(`Nami, rumbo a ${island}`);
  }
  makeFeast<T>(guest: T[]): void {
    console.log(`Chicos hagamos un banquete ${guest}, están invitados`);
  }
}

class Kurohige extends Character {
  get getName(): string {
    return "Marshall D. Teach";
  }
  attack(): void {
    console.log(`${this.getName}: Yami Ana Michi [Burakku Hōru]!`);
  }

  speak(): void {
    console.log(
      `Kurohige: --Esa nueva era que han mencionado solo es una porquería...
        ¿Que la época en la que los piratas soñaban ha llegado a su fin?, 
        ¡Menuda estupidez! Escucha muchacho, los sueños de un hombre,
        ¡Jamás tendrán fin!--`
    );
  }
}
