import axios from "axios";
import { ref } from "vue";

export default function (url, options = null) {
  const data = ref(null);
  const isLoading = ref(false);
  const errorMessage = ref(null);

  // const state = reactive({
  //   data: null,
  //   isLoading: false,
  //   errorMessage: null
  // })

  function execute() {
    isLoading.value = true;
    axios(url, options)
      .then((response) => {
        isLoading.value = false;
        data.value = response.data;
      })
      .catch((error) => {
        isLoading.value = false;
        errorMessage.value = error;
        console.error(error);
      });
  }

  return {
    data,
    isLoading,
    errorMessage,
    execute,
  };
}
