<template>
  <div class="page bg-white">
    <main>
      <div class="top-ct">
        <Header :navigation="navigation" />
        <Hero :titleLabel="hero.titleLabel" :title="hero.title" :subtitle="hero.subtitle"
          :primaryButtonLabel="hero.primaryButtonLabel" :primaryButtonLink="hero.primaryButtonLink"
          :secondaryButtonLabel="hero.secondaryButtonLabel" :secondaryButtonLink="hero.secondaryButtonLink"
          :imgSrc="hero.imgSrc" />
        <Stats :title="stats.title" :stats="stats.stats" />
      </div>

      <div class="content-ct">
        <div class="features-ct">
          <FeaturesRx :titleLabel="featOne.titleLabel" :title="featOne.title" :subtitle="featOne.subtitle"
            :features="featOne.features" :imgSrc="featOne.imgSrc" :imgAlt="featOne.imgAlt" />
          <FeaturesLx :titleLabel="featTwo.titleLabel" :title="featTwo.title" :subtitle="featTwo.subtitle"
            :features="featTwo.features" :imgSrc="featTwo.imgSrc" :imgAlt="featTwo.imgAlt" />
          <FeaturesRow :title="featThree.title" :subtitle="featThree.subtitle" :leftImgSrc="featThree.leftImgSrc"
            :leftImgAlt="featThree.leftImgAlt" :leftDescription="featThree.leftDescription"
            :leftButtonLabel="featThree.leftButtonLabel" :leftButtonLink="featThree.leftButtonLink"
            :rightImgSrc="featThree.rightImgSrc" :rightImgAlt="featThree.rightImgAlt"
            :rightDescription="featThree.rightDescription" :rightButtonLabel="featThree.rightButtonLabel"
            :rightButtonLink="featThree.rightButtonLink" />
        </div>
        <div class="testimonial-ct">
          <Testimonial :testimonial="testimonial.content" :name="testimonial.name" :company="testimonial.company"
            :companyLink="testimonial.companyLink" />
        </div>
        <div class="pricing-ct">
          <Pricing :titleLabel="pricing.titleLabel" :title="pricing.title" :subtitle="pricing.subtitle"
            :tiers="pricing.tiers" />
        </div>
        <div class="faq-ct">
          <Faq :title="faqs.title" :faqs="faqs.faqs" />
        </div>
        <div class="newsletter-ct">
          <NewsletterForm :loading="true" :subscribed="!!newsletter.subscriberEmail" :title="newsletter.title"
            :policyNotice="newsletter.policyNotice" :inputLabel="newsletter.inputLabel"
            :inputPlaceholder="newsletter.inputPlaceholder" :inputButtonLabel="newsletter.inputButtonLabel"
            @subscribe="subscribeVisitor($event)" />
        </div>
      </div>
    </main>

    <Footer :navigation="footerNavigation" />
  </div>
</template>

<script setup>
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/vue/20/solid'

import { defineComponent, h } from 'vue'
</script>

<script>
export default {
  data() {
    return {
      // navigation
      navigation: [
        { name: 'Product', href: '#' },
        { name: 'Features', href: '#' },
        { name: 'Marketplace', href: '#' },
        { name: 'Company', href: '#' },
      ],
      footerNavigation: [
        {
          name: 'Facebook',
          href: '#',
          icon: defineComponent({
            render: () =>
              h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                h('path', {
                  'fill-rule': 'evenodd',
                  d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                  'clip-rule': 'evenodd',
                }),
              ]),
          }),
        },
        {
          name: 'Instagram',
          href: '#',
          icon: defineComponent({
            render: () =>
              h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                h('path', {
                  'fill-rule': 'evenodd',
                  d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                  'clip-rule': 'evenodd',
                }),
              ]),
          }),
        },
        {
          name: 'X',
          href: '#',
          icon: defineComponent({
            render: () =>
              h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                h('path', {
                  d: 'M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z',
                }),
              ]),
          }),
        },
        {
          name: 'GitHub',
          href: '#',
          icon: defineComponent({
            render: () =>
              h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                h('path', {
                  'fill-rule': 'evenodd',
                  d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
                  'clip-rule': 'evenodd',
                }),
              ]),
          }),
        },
        {
          name: 'YouTube',
          href: '#',
          icon: defineComponent({
            render: () =>
              h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                h('path', {
                  'fill-rule': 'evenodd',
                  d: 'M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z',
                  'clip-rule': 'evenodd',
                }),
              ]),
          }),
        },
      ],

      // hero
      hero: {
        imgSrc: "/src/assets/imgs/hero-img.png",
        titleLabel: 'For restaurants with 300+ wine labels',
        title: 'Your Wine Cellar Always in Your Pocket',
        subtitle: 'Digitalize Your Wine Cellar and Create Your Wine List with a Single Click. Effortlessly Manage and Showcase Your Collection Anytime, Anywhere. ',
        primaryButtonLabel: 'Book a FREE Demo',
        primaryButtonLink: '#',
        secondaryButtonLabel: 'Read more',
        secondaryButtonLink: '# ',
      },

      // sections
      stats: {
        title: "Gain immediate access to our Database with:",
        stats: [
          { id: 1, name: 'Wineries', value: '130k+' },
          { id: 2, name: 'Wines', value: '1.5M+' },
          { id: 3, name: 'New users annually', value: '46,000' },
        ]
      },

      featOne: {
        titleLabel: "Smart design",
        title: "An integrated workflow",
        subtitle: "Experience the ease of managing your wine cellar with our intuitive platform. Gain control over your collection, simplify inventory management, craft beautiful wine cards and leverage reliable data.",
        imgSrc: "/src/assets/imgs/screenshot1.png",
        imgAlt: "Screenshot",
        features: [
          {
            name: 'Push to deploy.',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
            icon: CloudArrowUpIcon,
          },
          {
            name: 'SSL certificates.',
            description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
            icon: LockClosedIcon,
          },
          {
            name: 'Simple queues.',
            description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
            icon: ArrowPathIcon,
          },
        ]
      },
      featTwo: {
        titleLabel: "Smart design",
        title: "An integrated workflow",
        subtitle: "Experience the ease of managing your wine cellar with our intuitive platform. Gain control over your collection, simplify inventory management, craft beautiful wine cards and leverage reliable data.",
        imgSrc: "/src/assets/imgs/screenshot2.png",
        imgAlt: "Screenshot",
        features: [
          {
            name: 'Push to deploy.',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
            icon: CloudArrowUpIcon,
          },
          {
            name: 'SSL certificates.',
            description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
            icon: LockClosedIcon,
          },
          {
            name: 'Simple queues.',
            description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
            icon: ArrowPathIcon,
          },
        ]
      },
      featThree: {
        title: "An integrated workflow",
        subtitle: "Experience the ease of managing your wine cellar with our intuitive platform. Gain control over your collection, simplify inventory management, craft beautiful wine cards and leverage reliable data.",
        leftImgSrc: "/src/assets/imgs/winelist.png",
        leftImgAlt: "Screenshot",
        leftDescription: "Up your snack organization game with multiple compartment options. The quick-access stash pouch is ready for even the most unexpected snack attacks and sharing needs.",
        leftButtonLabel: "Learn more",
        leftButtonLink: "#",
        rightImgSrc: "/src/assets/imgs/winelist.png",
        rightImgAlt: "Screenshot",
        rightDescription: "Up your snack organization game with multiple compartment options. The quick-access stash pouch is ready for even the most unexpected snack attacks and sharing needs.",
      },

      testimonial: {
        content:
          "Vinoteqa ha rivoluzionato la gestione del nostro inventario e della lista dei vini. Con i dati dei vini già a disposizione e aggiornamenti in tempo reale, le nostre operazioni sono efficienti e la carta è sempre aggiornata. Vinoteqa mantiene davvero la nostra cantina a portata di mano, permettendoci di concentrarci sull'offrire un'esperienza culinaria eccezionale.",
        name: "Stefano Kratter",
        company: "Ristorante Mondschein - A Taste of the Dolomites",
        companyLink: "https://www.ristorantemondschein.it/"
      },

      pricing: {
        titleLabel: "Pricing",
        title: "One Simple Price for All Features",
        subtitle: "Get Everything You Need to Master Your Wine Inventory and Wine List Management with a Single Plan.",
        tiers: [
          {
            name: 'Onboarding',
            id: 'onboarding',
            href: '#',
            price: '€1,000',
            priceFrequency: 'one-time',
            description: "We will set up and help you get started.",
            features: ['White gloves onboarding', 'Import of your current inventory', 'Support and Training'],
            featured: false,
          },
          {
            name: 'License',
            id: 'license',
            href: '#',
            price: '€ 960',
            priceFrequency: '/year',
            description: 'Dedicated support and continuous updates',
            features: [
              'Access to 1M+ Wine Labels',
              'Real-Time Inventory Control',
              'Automatic Wine List Generation',
              'Advanced Reporting and Analytics'
            ],
            linkLabel: "Book a demo for Free",
            featured: true,
          },
          {
            name: '',
            id: 'personalizations',
            href: '#',
            price: 'Custom',
            description: 'Tailored to Meet Your Unique Needs',
            features: [
              'POS System Integration',
              'Accounting Software Integration',
            ],
            linkLabel: "Contact Us",
            featured: false,
          },
        ]
      },

      faqs: {
        title: "Frequently asked questions (FAQs)",
        faqs: [
          {
            question: "What's the best thing about Switzerland?",
            answer:
              "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
          },
          // More questions...
        ],
      },

      newsletter: {
        subscriberEmail: null,
        title: "Subscribe to our newsletter",
        inputLabel: "Enter your email",
        inputPlaceholder: "Enter your email",
        inputButtonLabel: "Subscribe",
        policyNotice: "By subscribing, you agree to receive our newsletter.",
      },
    }
  },

  methods: {
    subscribeVisitor(event) {
      console.log('Subscribing visitor...', event.email)
      this.newsletter.subscriberEmail = event.email
    }
  }
}
</script>