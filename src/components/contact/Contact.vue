<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { ref } from "vue";
import { MoveRight } from "lucide-vue-next";

const form = ref({
  name: "",
  mobile: "",
  email: "",
  stream: "",
  message: "",
});
</script>

<template>
  <section class="w-full bg-white py-8 lg:py-20 px-4 lg:px-24">
    <!-- Header -->
    <div class="text-center mb-12">
      <h2
        class="text-2xl md:text-4xl font-semibold text-neutral-900 relative inline-block"
      >
        Connect with Our Team
        <img src="/icons/tild-line.svg" class="w-28 lg:w-fit lg:h-fit" alt="" />
      </h2>
      <p class="mt-6 text-neutral-600 mx-auto text-base md:w-[30rem]">
        Finding the right online university can be challenging. Reach out to our
        experts and get the right direction.
      </p>
    </div>

    <!-- Main Grid -->
    <div
      class="grid grid-cols-1 W lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start"
    >
      <!-- Left Side -->
      <div class="my-auto">
        <h3
          class="text-lg lg:text-[2.75rem] font-semibold text-neutral-900 mb-2"
        >
          Collegesathi Learner Support
        </h3>
        <p class="text-neutral-600 text-base mb-8">
          We are here to help you at every step!
        </p>

        <!-- WhatsApp Card -->
        <div class="flex flex-col gap-5">
          <Card
            class="flex lg:w-[26.938rem] h-[5rem] bg-[#F3F3F3] items-center justify-between p-0 rounded-lg border-none shadow-none hover:shadow-lg transition"
          >
            <CardContent
              class="relative p-0 h-full flex overflow-hidden justify-between items-center w-full"
            >
              <div class="px-6 py-4">
                <p class="text-sm mb-2 text-neutral-700">WhatsApp Number</p>
                <p class="text-xs text-neutral-700">
                  Connect with us on WhatsApp
                </p>
              </div>
              <div
                class="absolute -right-6 -bottom-15 w-32 h-32 flex bg-red-500 rounded-full text-white"
              >
                <img
                  src="\icons\phone.svg"
                  class="absolute h-16 w-16 top-1 left-9"
                />
              </div>
            </CardContent>
          </Card>

          <!-- Email Card -->
          <Card
            class="flex lg:w-[26.938rem] h-[5rem] bg-[#F3F3F3] items-center justify-between p-0 rounded-lg border-none shadow-none hover:shadow-lg transition"
          >
            <CardContent
              class="relative p-0 h-full flex overflow-hidden justify-between items-center w-full"
            >
              <div class="px-6 py-4">
                <p class="text-base mb-2 text-neutral-700">Send Email</p>
                <p class="text-xs text-neutral-700">Send us your email</p>
              </div>
              <div
                class="absolute -right-6 -bottom-15 w-32 h-32 flex bg-red-500 rounded-full text-white"
              >
                <img
                  src="\icons\mail.svg"
                  class="absolute h-9 w-9 top-5 left-9"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <!-- Right Side (Form) -->
      <div
        class="bg-white lg:p-8 rounded-2xl shadow-[0px_5px_20px_5px_#e0e0e0] lg:w-[39.75rem] p-4"
      >
        <form class="space-y-4 [&>*]:focus-visible:ring-1">
          <Input
            placeholder="Name"
            v-model="form.name"
            class="h-[3.8rem] text-sm bg-[#F7F6F6] border-none"
          />
          <Input
            placeholder="Mobile Number"
            v-model="form.mobile"
            class="h-[3.8rem] text-sm bg-[#F7F6F6] border-none"
          />
          <Input
            placeholder="Email"
            type="email"
            v-model="form.email"
            class="h-[3.8rem] text-sm bg-[#F7F6F6] border-none"
          />

          <Select v-model="form.stream">
            <SelectTrigger
              class="text-sm w-full bg-[#F7F6F6] border-none !h-[3.8rem]"
              varient="custom"
            >
              <SelectValue placeholder="Stream" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="science">Science</SelectItem>
              <SelectItem value="commerce">Commerce</SelectItem>
              <SelectItem value="arts">Arts</SelectItem>
            </SelectContent>
          </Select>

          <Textarea
            placeholder="Write down your query..."
            v-model="form.message"
            class="min-h-[100px] text-sm bg-[#F7F6F6] border-none"
          />

          <Button
            type="submit"
            class="relative w-fit p-0 bg-theme hover:bg-red-600 text-white font-medium text-base rounded-full"
          >
            Submit
            <div class="h-7 w-7 bg-white rounded-full"></div>
            <MoveRight
              class="absolute stroke-[3px] right-[18px] rounded-full text-theme"
            />
          </Button>
        </form>
      </div>
    </div>
  </section>
</template>
