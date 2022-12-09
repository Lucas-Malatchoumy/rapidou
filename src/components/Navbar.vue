<template>
    <header aria-label="Site Header" class="bg-white">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <div class="flex-1 md:flex md:items-center md:gap-12">
        <a class="block text-teal-600" href="/">
          <span class="sr-only">Home</span>
          <img src="../assets/logo.png" class="w-32"/>
        </a>
      </div>

      <div class="md:flex md:items-center md:gap-12">
        <nav aria-label="Site Nav" class="hidden md:block">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <a
                class="text-gray-500 transition hover:text-gray-500/75"
                href="/about"
              >
                Tester notre solution !
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  </div>
</header>
</template>