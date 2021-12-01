<template>
  <div class="flex justify-center flex-grow items-center h-full flex-col">
    <h1 class="text-4xl text-white">Hello world</h1>
    <div class="mt-5 space-x-5">
      <button @click="desktopNotify()" class="btn">Desktop Notify from Electron</button>
      <button @click="swal()" class="btn">Sweet Alert 2</button>
      <button @click="copy('test text')" class="btn">Copy to clipboard</button>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";

export default {
  methods: {
    desktopNotify() {
      ipcRenderer.send("sendDesktopNotification", { title: "notify title", body: "notify body" });
    },
    swal() {
      this.$swal({
        showConfirmButton: true,
        title: "Hello",
        icon: "info",
      });
    },
    copy(value) {
      this.$copyText(value)
        .then(() => {
          this.$swal({
            toast: true,
            position: "bottom-end",
            showConfirmButton: false,
            timer: 2000,
            title: "Copied successfully!",
            icon: "success",
          });
        })
        .catch(() => {
          this.$swal({
            toast: true,
            position: "bottom-end",
            showConfirmButton: false,
            timer: 2000,
            title: "Something went wrong...",
            icon: "error",
          });
        });
    },
  },
};
</script>

<style scoped>
.btn {
  @apply font-bold py-2 px-4 rounded bg-green-600 text-white;
}
.btn:hover {
  @apply bg-green-700;
}
</style>
