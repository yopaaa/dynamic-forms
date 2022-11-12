$(document).ready(function () {
    $("#formMain").on("click", ".input", function () {
      const id = $(this).data().id;
      let attr;

      $(`#${id}-in1`).on("input", function () {
        attr = $(this).val();
        $(`#${id}-in2`).attr("name", attr);
      });
    });

    //REMOVE INPUT
    $("#formMain").on("click", ".removeInput", function () {
      const id = $(this).data().id;
      $(`#${id}`).remove();
    });
  });

  // SET FORM ACTIONS AND METHOD
  function SetForm() {
    let formActions = $("#formActions").val();
    let formMethod = $("#formMethod").val();

    $("#form").attr("action", formActions);
    $("#form").attr("method", formMethod);
  }

  function AddDataByText() {
    let AddDataByText_textArea = $("#AddDataByText-ta").val();

    try {
      let  data = eval("(" + AddDataByText_textArea + ")");
      
      const Objkey = Object.keys(data);
      $("#AddDataByText-warning").hide();

      Objkey.forEach((Objkey) => {
        AddOtherInput(Objkey, data[Objkey]);
      });
    } catch (err) {
      $("#AddDataByText-warning").show().text(err.message);
    }
  }

  // ADD ANOTHER INPUT TO FORM
  function AddOtherInput(val1, val2) {
    // const form = document.querySelector("#formMain");
    let input1 = val1 ? val1 : "";
    let input2 = val2 ? val2 : "";
    const id = generatePassword(10);
    $("#formMain").append(`
    <span
      class="input"
      data-id="${id}" id="${id}"
    >
      <input type="text" placeholder="key..." id="${id}-in1" value="${input1}" />
      <p>:</p>
      <input type="text" placeholder="value..." id="${id}-in2" value="${input2}"/>
      <svg
        data-id="${id}"
        class="removeInput"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="red"
          d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z"
          fill="currentColor"
        />
        <path
          fill="red"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          fill="currentColor"
        />
      </svg>
    </span>`);
  }

  // TO GENERATE RANDOM ID
  function generatePassword(length) {
    (charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"),
      (retVal = "");
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }