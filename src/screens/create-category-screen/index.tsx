import React, { useState } from 'react'
import SafeAreaWrapper from '../../components/shared/SafeAreaWrapper'
import { Pressable, TextInput, View } from 'react-native'
import { Box, Text } from '../../utils/theme'
import NavigateBack from '../../components/shared/NavigateBack'
import { colors } from '../../utils/theme/colors'
import { getColors, getIcons } from '../../utils/helpers'
import Button from '../../components/shared/Button'
import { set } from 'react-hook-form'
import useSWRMutation from 'swr/mutation'
import axiosInstance, { BASE_URL, TOKEN_NAME } from '../../services/configs'
import { useSWRConfig } from 'swr'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { CategoriesStackParamList } from '../../navigation/type'
const COLORS = getColors()
const ICONS = getIcons()

const DEFAULT_COLORS = COLORS[0]
const DEFAULT_ICONS = ICONS[0]
type CreateCategoryRouteTypes = RouteProp<CategoriesStackParamList, "CreateCategory">
const createCategoryRequest = async (url: string, { arg }: { arg: ICategoryRequest }) => {
    try {
        await axiosInstance.post(url, { ...arg })

    } catch (error) {

    }
}
const updateCategoryRequest = async (url: string, { arg }: { arg: ICategoryRequest }) => {
    try {
        await axiosInstance.put(url, { ...arg })

    } catch (error) {

    }
}
const deleteCategoryRequest = async (url: string, { arg }:{arg: { id:string }}) => {
    try {
        await axiosInstance.delete(url+"/"+arg.id)

    } catch (error) {

    }
}
const CreateCategory = () => {
    const route = useRoute<CreateCategoryRouteTypes>()
    const [newCategory, setNewCategory] = useState<Omit<ICategory, "_id" | "user" | "isEditable">>({
        name: route.params.category?.name ?? "",
        color: route.params.category?.color ?? DEFAULT_COLORS,
        icon: route.params.category?.icon ?? DEFAULT_ICONS
    })
    const navigation = useNavigation()

    const { trigger, isMutating } = useSWRMutation("categories/create", createCategoryRequest)
    const { trigger: updateTrigger } = useSWRMutation("categories/update", updateCategoryRequest)
    const { trigger: deleteTrigger } = useSWRMutation("categories", deleteCategoryRequest)
    const { mutate } = useSWRConfig()
    const createNewCategory = async () => {
        try {
            if (route.params.category) {
                const updateCategoryItem = {
                    ...route.params.category,
                    ...newCategory
                }
                await updateTrigger({
                    ...updateCategoryItem
                })
            } else {

                trigger({
                    ...newCategory
                })

            }

            await mutate(BASE_URL + "categories")
            navigation.goBack()
        } catch (error) {
            console.log(error, 'create new category')

        }
    }

    const deleetCategory=async()=>{
        try {
            if(route.params.category?._id){

                await deleteTrigger({
                    id:route.params.category?._id})
                    await mutate(BASE_URL + "categories")
                    navigation.goBack()
            }

        } catch (error) {
            
        }
    }

    const updateColor = (color: IColor) => {
        setNewCategory(prev => {
            return {
                ...prev,
                color
            }
        })
    }
    const updateIcon = (icon: IIcon) => {
        setNewCategory(prev => {
            return {
                ...prev,
                icon
            }
        })
    }
    return (
        <SafeAreaWrapper>
            <Box flex={1} m='4'>
                <Box >
                     <Box flexDirection='row' justifyContent='space-between' alignItems='center'>
                        <NavigateBack />
                        {route.params.category?._id &&(<Pressable onPress={deleetCategory}>

                    <Text variant='textXl' fontWeight={700} color='red500'>Delete</Text>
                        </Pressable>)}
                    </Box>
                </Box>
                <Box height={16} />
                <Box bg='gray250' borderRadius='rounded-2xl'>
                    <TextInput
                        style={{
                            fontSize: 20,
                            lineHeight: 26,
                            padding: 15,
                            color: 'black'
                        }}
                        value={newCategory.name}

                        maxLength={36}
                        placeholder='Create new list'
                        placeholderTextColor={colors.gray5}
                        onChangeText={(text) => {
                            setNewCategory((prev) => {
                                return {
                                    ...prev,
                                    name: text
                                }
                            })
                        }}
                    />
                </Box>
                <Box height={24} />

                <Box bg='gray250' p='4' borderRadius='rounded-2xl' >
                    <Box
                        bg={newCategory.color.name as any}
                        width={80}
                        p='2'
                        mb='4'
                        borderRadius='rounded-2xl'
                        alignItems='center'
                    >
                        <Text variant='textSm' fontWeight={700} color='white'>Colors</Text>

                    </Box>
                    <Box flexDirection='row' justifyContent='space-evenly'>
                        {
                            COLORS.map((_color => {
                                return (
                                    <Pressable key={_color.id} onPress={() => {
                                        updateColor(_color)
                                    }}>
                                        <Box style={{
                                            backgroundColor: _color.code
                                        }}
                                            height={24}
                                            width={24}
                                            borderRadius='rounded-2xl'
                                        ></Box>
                                    </Pressable>
                                )
                            }))
                        }
                    </Box>
                </Box>
                <Box height={24} />

                <Box bg='gray250' p='4' borderRadius='rounded-2xl' >
                    <Box
                        bg={'white'}
                        width={80}
                        p='2'
                        mb='4'
                        borderRadius='rounded-2xl'
                        alignItems='center'
                    >
                        <Text variant='textBase' fontWeight={700}>{newCategory.icon.symbol}</Text>

                    </Box>
                    <Box flexDirection='row' justifyContent='space-evenly'>
                        {
                            ICONS.map((_icons => {
                                return (
                                    <Pressable key={_icons.id} onPress={() => {
                                        updateIcon(_icons)
                                    }}>
                                        <Box
                                            height={24}
                                            width={24}
                                            borderRadius='rounded-2xl'
                                        >
                                            <Text variant='textBase' fontWeight={700}>{_icons.symbol}</Text>

                                        </Box>
                                    </Pressable>
                                )
                            }))
                        }
                    </Box>
                </Box>
                <Box
                    position='absolute' bottom={0} left={0} right={0}
                >

                    <Button label={route.params.category ? "Edit category" : 'Create new category'} onPress={createNewCategory} />
                </Box>
            </Box>
        </SafeAreaWrapper>
    )
}

export default CreateCategory