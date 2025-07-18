<script lang="ts">
  import Input from "$lib/components/ui/input.svelte";
  import Checkbox from "$lib/components/ui/checkbox.svelte";
  import { fade, scale } from "svelte/transition";
  import { ChevronLeft, X } from "@lucide/svelte";
  import Select from "$lib/components/ui/select.svelte";
  import LanguageSwitcher from "$lib/components/language-switcher.svelte";

  let isOpen = false;
  let activeTab: "email" | "phone" = "email";
  let email = "";
  let password = "";
  let phoneNumber = "";
  let countryCode = "US+1";
  let acceptTerms = true;
  let newsletter = true;
  let cookies = true;
  let smsConsent = true;
  let noSms = false;

  const toggleModal = () => (isOpen = !isOpen);

  const setActiveTab = (tab: "email" | "phone") => {
    activeTab = tab;
    if (tab === "phone") {
      phoneNumber = "";
      countryCode = "+1";
    }
  };

  const handleSubmit = () => {
    if (activeTab === "email") {
      console.log("Email login:", { email, password });
    } else {
      console.log("Phone login:", { countryCode, phoneNumber });
    }
  };
</script>

<header class="border-b border-gray-200">
  <div class="container">
    <div class="py-4 flex justify-between items-center">
      <p class="text-sm text-text-grey">
        Hi, <button
          on:click={toggleModal}
          class="text-blue-600 font-semibold cursor-pointer"
          >Sign in / Register</button
        >
      </p>
      <LanguageSwitcher />
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    {#if isOpen}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        transition:fade={{ duration: 150 }}
        class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        on:click={toggleModal}
      >
        <div
          transition:scale={{ duration: 150 }}
          on:click|stopPropagation
          class="bg-white rounded-lg px-6 py-4 shadow-xl w-full max-w-[450px] overflow-y-auto max-h-[90vh]"
        >
          <div class="flex justify-end items-end mt-3">
            <button
              on:click={toggleModal}
              class="p-1 font-bold cursor-pointer rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="Close modal"
            >
              <X class="w-6 h-6" />
            </button>
          </div>

          <div class="md:px-8 relative">
            <h3
              class="text-text-primary text-[20px] text-center mt-4 mb-4 font-semibold font-roboto"
            >
              Sign in / Register
            </h3>

            {#if activeTab === "phone"}
              <button
                on:click={() => setActiveTab("email")}
                class="w-[50px] cursor-pointer absolute -top-12 left-2 h-[50px] hover:bg-gray-100 rounded-md cursor-pointer flex justify-center items-center"
              >
                <ChevronLeft />
              </button>
              <div class="flex gap-2">
                <div class="w-full">
                  <p class="block text-lg font-semibold text-text-primary mb-1">
                    <span class="text-red-500">*</span> Phone Number
                  </p>
                  <div class="relative flex items-center mb-8">
                    <Select
                      options={[
                        { value: "US+1", label: "US+1" },
                        { value: "NZ+64", label: "NZ+64" },
                      ]}
                      value={countryCode}
                      className="w-28 mt-1"
                      containerClass="h-[50px]"
                    />
                    <Input
                      inputProps={{
                        type: "tel",
                        bindValue: phoneNumber,
                        placeholder: "Please input phone number",
                        required: false,
                      }}
                    />
                  </div>
                </div>
              </div>
            {:else}
              <Input
                inputProps={{
                  type: "email",
                  label: "Email",
                  bindValue: email,
                  placeholder: "Please input email",
                  required: true,
                }}
              />
            {/if}

            <button
              on:click={handleSubmit}
              class="w-full mt-6 bg-primary hover:bg-primary/80 text-text-primary text-2xl py-2 px-4 transition-colors font-roboto cursor-pointer rounded-full"
            >
              Continue
            </button>

            {#if activeTab === "email"}
              <div class="relative my-6">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-gray-200"></div>
                </div>
                <div class="relative flex justify-center">
                  <span class="px-5 bg-white text-lg text-text-grey"
                    >Or continue with other ways</span
                  >
                </div>
              </div>
            {/if}

            {#if activeTab === "phone"}
              <h4 class="text-[16px] font-semibold text-text-primary mt-8 mb-8">
                Would you like to receive SMS notifications from Voghion ?
              </h4>
            {/if}

            {#if activeTab === "email"}
              <div class="flex items-center gap-2 mb-6">
                <button
                  type="button"
                  class="flex items-center justify-center p-4 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-primary/15 cursor-pointer"
                >
                  <img
                    src="/assets/google.png"
                    alt="Google"
                    class="h-5 w-5 mr-1"
                  />
                  Google
                </button>
                <button
                  type="button"
                  class="flex items-center justify-center px-5 py-4 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-primary/15 cursor-pointer"
                >
                  <img
                    src="/assets/facebook.png"
                    alt="Facebook"
                    class="h-5 w-5 mr-1"
                  />
                  Facebook
                </button>
                <button
                  type="button"
                  on:click={() => setActiveTab("phone")}
                  class="flex items-center justify-center p-4 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-primary/15 cursor-pointer"
                >
                  <img
                    src="/assets/phone.png"
                    alt="Facebook"
                    class="h-5 w-5 mr-1"
                  />
                  Phone
                </button>
              </div>
            {/if}

            {#if activeTab === "email"}
              <Checkbox
                bindChecked={acceptTerms}
                required={true}
                label="I accept to Voghion Terms of Use"
                linkText="Terms of Use"
                linkHref="/terms"
              />

              <Checkbox
                bindChecked={newsletter}
                label="Sign up for Newsletter"
              />

              <Checkbox
                bindChecked={cookies}
                label="We use cookies and similar technologies that are essential to provide you our services. For more details, see our"
                linkText="Privacy & cookie policy"
                linkHref="/privacy"
              />
            {:else}
              <div class="mt-6">
                <Checkbox
                  bindChecked={smsConsent}
                  label="Yes, I would like to receive text messages about verification codes, notifications, and promotions to the phone number on this reservation."
                />

                <Checkbox bindChecked={noSms} label="No" />

                <p class="text-xs text-gray-500 mt-2">
                  By selecting "Yes" above, message and data rates may apply.
                  Message frequency varies and depends on the activity of your
                  reservation. You can opt out by responding STOP at any time.
                  For more information, please review our <a
                    href="/privacy"
                    class="text-blue-600 hover:underline"
                    >Privacy & cookie policy</a
                  >
                  and
                  <a href="/terms" class="text-blue-600 hover:underline"
                    >Terms of Use</a
                  >.
                </p>
              </div>
            {/if}
          </div>
        </div>
      </div>
    {/if}
  </div>
</header>
