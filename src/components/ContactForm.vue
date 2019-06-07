<template>
  <div>
  <h2>Напишите нам</h2>
  <form id="frm" action="#">
    <table class="contact_us_table">
      <tr>
        <td class="col1">
          <label for="y_name" class="lbl">Ваше имя</label>
        </td>
        <td>
          <input class="inp" type="text" id="y_name" placeholder="Ваше имя"> </td>
      </tr>
      <tr>
        <td class="col1">
          <label for="email" class="lbl">E-mail</label>
        </td>
        <td>
          <input class="inp" type="email" id="email" placeholder="test@site.com"> </td>
      </tr>
      <tr>
        <td class="col1">
          <label for="tema">Тема сообщения</label>
        </td>
        <td>
          <select class="inp" id="tema">
            <option value="book_problem">Проблемы с товаром</option>
            <option value="logist_problem">Проблемы с доставкой</option>
            <option value="other_problem">Другое</option>
          </select>
        </td>
      </tr>
      <tr>
        <td class="col1" valign="top">
          <label for="msg">Ваше сообщение</label>
        </td>
        <td>
          <textarea id="msg" placeholder="Ваше сообщение" rows="6" cols="45"></textarea>
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <input type="submit"> </td>
      </tr>
    </table>
  </form>
  </div>
</template>

<script>
    export default {
        name: "ContactForm"
    }
</script>

<style scoped>
  h2 {
    text-align: center; }
  .contact_us_table {
    margin: auto; }

  .contacts td,
  .contact_us_table td {
    padding: 4px; }

  .col1 {
    text-align: right;
    font-weight: bold; }

  .inp {
    height: 25px;
    width: 250px; }

  .inp,
  #msg {
    font-size: 14px;
    font-family: "book antiqua";
    text-transform: capitalize; }

  .inp[type="email"],
  #tema {
    text-transform: none; }

  .inp[type="email"]:focus {
    color: forestgreen;
    background-color: azure; }

</style>
