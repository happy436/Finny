import React, { useState, useEffect, useCallback } from "react"
import { useParams } from "react-router-dom"
import CardWrapper from "../../common/Card/Card"
import commonStyle from "../../common/style.module.css"
import { incomeCategoriesList, spendingCategories } from "./categoryListData"
import s from "./category.module.css"
import TextField from "./components/textField"
import CategoryList from "./components/categoryList"
import { UilCheck } from "@iconscout/react-unicons"
import { getId } from "../../../utils/createId"

function CategoryEditPage() {
    const { type } = useParams()
    const [activeCategory, setActiveCategory] = useState(null)
    const [activeSubmitButton, setActiveSubmit] = useState(null)
    const [pageType] = useState(type === "income" ? type : "spending")
    const [categoryList, setCategoryList] = useState([])
    const [category, setCategory] = useState({ name: "", _id: null })
    const handleChange = useCallback(target => {
        setCategory(prevState => ({
            ...prevState,
            [target.name]: target.value
        }))
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            _id: getId(),
            name: category.name,
            icon: categoryList.find(item => item._id === category._id).icon,
            color: categoryList.find(item => item._id === category._id).color,
            transaction: []
        }
        console.log(data)
    }
    useEffect(() => {
        if (pageType === "income") {
            setCategoryList(incomeCategoriesList)
        } else {
            setCategoryList(spendingCategories)
        }
    }, [])
    useEffect(() => {
        if (activeCategory !== null) {
            handleChange({ name: "_id", value: categoryList[activeCategory]._id })
        }
    }, [activeCategory])
    useEffect(() => {
        if (category.name.trim() !== "" && category._id !== "") {
            setActiveSubmit(true)
        } else {
            setActiveSubmit(false)
        }
    }, [category])
    const handleClick = (index) => {
        setActiveCategory(index)
    }
    return (
        <main className={`${s.wrapper} ${commonStyle.bg}`}>
            <CardWrapper>
                <form className={s.form} onSubmit={handleSubmit}>
                    <h2 className={s.title}>{pageType === "income" ? "Income Categories" : "Add spending category"}</h2>
                    <TextField onChange={handleChange} name={"name"} />
                    <CategoryList
                        activeCategory={activeCategory}
                        data={categoryList}
                        onClick={handleClick}
                    />
                    <button
                        className={`${s.submit} ${activeSubmitButton === true ? s.active : null}`}
                        type="submit"
                    >
                        <UilCheck />
                    </button>
                </form>
            </CardWrapper>
        </main>
    )
}

export default CategoryEditPage
