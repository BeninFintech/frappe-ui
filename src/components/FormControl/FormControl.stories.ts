import type { Meta, StoryObj } from '@storybook/vue3-vite'
import FormControl from './FormControl.vue'
import InputTypes from './stories/InputTypes.vue'
import TextareaType from './stories/TextareaType.vue'
import SelectType from './stories/SelectType.vue'
import CheckboxType from './stories/CheckboxType.vue'
import Variants from './stories/Variants.vue'
import Sizes from './stories/Sizes.vue'
import WithDescription from './stories/WithDescription.vue'
import WithSlots from './stories/WithSlots.vue'

const meta = {
  title: 'Components/FormControl',
  component: FormControl,
} satisfies Meta<typeof FormControl>

export default meta
type Story = StoryObj<typeof meta>

export const InputTypesStory: Story = { render: () => InputTypes, name: 'Input Types' }
export const TextareaStory: Story = { render: () => TextareaType, name: 'Textarea' }
export const SelectStory: Story = { render: () => SelectType, name: 'Select' }
export const CheckboxStory: Story = { render: () => CheckboxType, name: 'Checkbox' }
export const VariantsStory: Story = { render: () => Variants, name: 'Variants' }
export const SizesStory: Story = { render: () => Sizes, name: 'Sizes' }
export const WithDescriptionStory: Story = { render: () => WithDescription, name: 'With Description' }
export const WithSlotsStory: Story = { render: () => WithSlots, name: 'With Slots' }
