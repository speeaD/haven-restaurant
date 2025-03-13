import { UsePocketBaseType } from 'pocketbase'

declare module '#app' {
  interface NuxtApp {
    $pb: UsePocketBaseType
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $pb: UsePocketBaseType
  }
}

export {}