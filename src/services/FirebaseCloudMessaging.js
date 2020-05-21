import * as admin from "firebase-admin";
import FirebaseInit from "../config/FirebaseInit";

// 1# coletar token no login
// 2# armazenar token no db
// 3# caso usuário clique em "receber notificações de pets encontrados", adicionar seu token no topico
// 3.1# caso tópico não exista, criar tópico
// 4# caso usuário clique em "receber notificações de pets encontrados" novamente, remover seu token do topico
// 5# coletar dados do banco de dados, que devem ir para a notificao quando nova notificação for cadastrada
// 6# enviar notificacao para o topico definido

FirebaseInit.init();

var message = {
  notification: {
    body: "Um cão foi encontrado proximo a localizacao abc",
    title: "PET SÃO JOÃO - Pet encontrado!",
  },
  //send id on data
  token: registrationToken,
  //topico ao inves de token
  //topic=topico
};

class FirebaseCloudMessaging {
  static async send() {
    admin
      .messaging()
      .send(message)
      .then((response) => {
        console.log("Successfully sent message:", response);
      })
      .catch((error) => {
        console.log("Error sending message:", error);
      });
  }

  static async createTopic() {}

  static async regTopic() {}

  static async unregTopic() {}
}

export default FirebaseCloudMessaging;
